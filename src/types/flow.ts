import { NODE_TYPES } from '@/lib/constants';
import { Node } from '@xyflow/react';

/** Data schema for TextNode */
export type TextNodeData = { text: string };

/** Node `type` identifier for TextNode */
export type TextNodeType = typeof NODE_TYPES.TEXT;

/** Definition of TextNode */
export type TextNode = Node<TextNodeData, TextNodeType>;

/** `Union Type` of all supported Nodes */
export type NodeType = (typeof NODE_TYPES)[keyof typeof NODE_TYPES];

/** Union of all node types (Built-In + Custom Nodes) */
export type AppNode = TextNode;
