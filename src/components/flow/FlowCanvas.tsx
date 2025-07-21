'use client';

import '@xyflow/react/dist/style.css';

import {
  ReactFlow,
  Controls,
  Background,
  type NodeTypes,
  MiniMap,
} from '@xyflow/react';
import { useRef } from 'react';

import { NODE_TYPES } from '@/lib';
import { TextNode } from '../nodes';
import { useFlowBuilder } from '@/hooks';
import { NodesPanel, SettingsPanel } from '../panels';

/** Map supported node types to their corresponding React components */
const nodeTypes: NodeTypes = {
  [NODE_TYPES.TEXT]: TextNode,
};

/** Main Flow component that renders the flow editor */
export default function FlowCanvas() {
  const reactFlowWrapper = useRef(null);
  const {
    nodes,
    edges,
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
  } = useFlowBuilder();

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex w-full justify-end border-b-2 border-neutral-200 bg-white p-2">
        <button
          onClick={handleSave}
          className="mr-8 cursor-pointer rounded-md border-2 border-lime-500 px-4 py-1 font-semibold text-lime-500 transition-colors duration-150 hover:bg-orange-100"
        >
          Save Changes
        </button>
      </div>
      <div className="flex h-full">
        <div className="h-full w-full" ref={reactFlowWrapper}>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            onNodesDelete={onNodesDelete}
          >
            <Controls />
            <Background bgColor="#fafafa" size={4} color="#ddd9e5" />
            <MiniMap />
          </ReactFlow>
        </div>
        <aside className="w-80 border-l-2 border-neutral-200">
          {selectedNode ? (
            <SettingsPanel
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />
          ) : (
            <NodesPanel />
          )}
        </aside>
      </div>
    </div>
  );
}
