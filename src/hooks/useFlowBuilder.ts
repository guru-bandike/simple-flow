import { useDnD } from '@/components';
import { initialEdges, initialNodes } from '@/data';
import { createNode } from '@/lib';
import { AppNode } from '@/types';
import {
  addEdge,
  Connection,
  Edge,
  MarkerType,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

/** Provides Flow state and logic management helpers */
export default function useFlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);
  const [selectedNode, setSelectedNode] = useState<AppNode | null>(null);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  /** Handles connect event to connect two nodes with an edge */
  const onConnect = useCallback(
    (connection: Connection) => {
      // Prevents multiple edges from the same source handle
      if (edges.some((e) => e.source === connection.source)) {
        toast.error('Only one edge per source handle is allowed!');
        return;
      }

      // Adds new connection Edge with custom styling
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            style: {
              stroke: 'oklch(75% 0.183 55.934)',
              strokeWidth: 2,
              strokeDasharray: '5,5',
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: 'oklch(75% 0.183 55.934)',
            },
            animated: true,
          },
          eds,
        ),
      );
    },
    [edges, setEdges],
  );

  /** Handles drop event to create new node with dropped node type */
  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();

      // Ensure node type dropped on canvas
      if (!type) return;

      // Create node exact flow position from screen pixel position
      const position = screenToFlowPosition({ x: e.clientX, y: e.clientY });
      const newNode = createNode(type, position); // Create new Node

      // Ensure node is created, add to the Flow state
      if (newNode) {
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [screenToFlowPosition, type, setNodes],
  );

  /** Enables dropping by preventing default drag-over behavior */
  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  /** Handles node selection when a node is clicked */
  const onNodeClick = useCallback((_: unknown, node: AppNode) => {
    setSelectedNode(node);
  }, []);

  /** Deselectes selected node when clicked on empty canvas */
  const onPaneClick = () => setSelectedNode(null);

  /** Handles Node deletion */
  const onNodesDelete = (deleted: AppNode[]) => {
    if (deleted[0].id === selectedNode?.id) {
      setSelectedNode(null);
    }
  };

  /** Currently - Performs Flow validation */
  const handleSave = () => {
    // Ensure minimum nodes count
    if (nodes.length < 2) return toast.error('Need at least 2 nodes to save!');

    // Find Nodes without any incoming edges
    const nodesWithoutIncomingEdge = nodes.filter(
      (node) => !edges.some((edge) => edge.target === node.id),
    );

    // Ensure maximum only one node have no incoming edges
    if (nodesWithoutIncomingEdge.length > 1) {
      toast.error('Only one node is allowed to \"Not\" have an incoming edge!');
      return;
    }

    toast.success('Flow saved successfully!');
  };

  return {
    nodes,
    setNodes,
    edges,
    setEdges,
    selectedNode,
    setSelectedNode,
    onNodesChange,
    onEdgesChange,
    onDrop,
    onDragOver,
    onConnect,
    onNodeClick,
    onPaneClick,
    onNodesDelete,
    handleSave,
  };
}
