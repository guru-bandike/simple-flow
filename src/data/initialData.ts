import { MarkerType } from '@xyflow/react';
import { NODE_TYPES } from '@/lib';

export const initialNodes = [
  {
    id: '1',
    type: NODE_TYPES.TEXT,
    position: { x: 521, y: 40 },
    data: { text: '👋Hey! I am JokeBot' },
  },
  {
    id: '2',
    type: NODE_TYPES.TEXT,
    position: { x: 521, y: 189 },
    data: { text: ' Let me tell you a joke 😄' },
  },
  {
    id: '3',
    type: NODE_TYPES.TEXT,
    position: { x: 521, y: 342 },
    data: { text: ' Why did the developer go broke? 🤔' },
  },
  {
    id: '4',
    type: NODE_TYPES.TEXT,
    position: { x: 521, y: 489 },
    data: { text: ' Because he used up all his cache! 💸' },
  },
];

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
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
  {
    id: 'e2-3',
    source: '2',
    target: '3',
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
  {
    id: 'e1-4',
    source: '3',
    target: '4',
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
];
