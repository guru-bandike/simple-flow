import { AppNode } from '@/types/flow';
import { NODE_TYPES } from './constants';
import type { XYPosition } from '@xyflow/react';

let id = 1;
const getId = () => `node-${id++}`;

/** Maps Node `Types` with their corresponding Node creation funtion */
const nodeBuilders: Record<string, (position: XYPosition) => AppNode> = {
  [NODE_TYPES.TEXT]: (position) => ({
    id: getId(),
    type: NODE_TYPES.TEXT,
    position,
    data: { text: '' },
  }),
};

/** Creates a New Node from given type and position */
export function createNode(type: string, position: XYPosition): AppNode | null {
  const builder = nodeBuilders[type];
  return builder ? builder(position) : null;
}
