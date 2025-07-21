'use client';

import { NODE_TYPES } from '@/lib';
import { NodeType } from '@/types/flow';
import { useDnD } from '../flow/DnDContext';
import { TbMessage2Plus } from 'react-icons/tb';
import { memo } from 'react';

/** Displays draggable supported `Node Types` */
export default memo(function NodesPanel() {
  const [, setType] = useDnD();

  // Handles Node drag start event to set Node type for Drag and Drop context
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: NodeType,
  ) => {
    setType(nodeType);
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <h3 className="p-2 font-semibold text-gray-600">NODES</h3>
      <div className="bg-white-50 flex h-full w-full justify-center font-normal">
        <div
          className="gap flex h-30 w-30 cursor-grab flex-col items-center justify-center gap-2 rounded-xl border-2 border-orange-400 bg-orange-50 p-2 text-center font-bold text-gray-600 shadow"
          draggable
          onDragStart={(event) => handleDragStart(event, NODE_TYPES.TEXT)}
        >
          <TbMessage2Plus
            className="h-13 w-13"
            color="oklch(75% 0.183 55.934)"
          />
          <div>Message</div>
        </div>
      </div>
    </div>
  );
});
