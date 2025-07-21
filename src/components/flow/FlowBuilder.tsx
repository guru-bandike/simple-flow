'use client';

import { ReactFlowProvider } from '@xyflow/react';

import FlowCanvas from './FlowCanvas';
import { DnDProvider } from './DnDContext';

/** Wraps the main flow component and provides contexts */
export default function FlowBuilder() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <FlowCanvas />
      </DnDProvider>
    </ReactFlowProvider>
  );
}
