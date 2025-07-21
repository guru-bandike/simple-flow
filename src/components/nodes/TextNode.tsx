import { memo } from 'react';
import { Handle, NodeProps, Position, useReactFlow } from '@xyflow/react';
import { TextNode } from '@/types/flow';
import { TbMessage2 } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';

/** Renders the Custom `Text Node` component */
export default memo(function TextNode(props: NodeProps<TextNode>) {
  const { data, id } = props;
  const { deleteElements } = useReactFlow();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div className={`'} w-60 rounded-lg bg-white text-sm shadow`}>
      <Handle
        type="target"
        position={Position.Top}
        style={{
          width: 8,
          height: 8,
          background: '#ffedd4',
          borderColor: '#ff8904',
        }}
      />

      <div className="relative h-7 py-1">
        <div className="absolute bottom-0.5 left-2 h-10 w-10 rounded-md border border-orange-400 bg-orange-100 p-2.5">
          <TbMessage2
            className="h-full w-full"
            color="oklch(75% 0.183 55.934)"
          />
        </div>

        <button
          onClick={handleDelete}
          className="absolute right-1.5 bottom-0 h-5 cursor-pointer text-gray-500 transition-colors duration-150 hover:text-gray-900"
        >
          <RiDeleteBin6Line className="h-full w-full" />
        </button>
      </div>

      <div className="px-2 pt-1 pb-2.5">
        <div className="text-xs font-semibold text-orange-400">
          SEND MESSAGE
        </div>
        <div className="mt-1 text-xs break-words">
          {data.text || (
            <span className="text-gray-400 italic">Empty message</span>
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          width: 8,
          height: 8,
          background: '#ffedd4',
          borderColor: '#ff8904',
        }}
      />
    </div>
  );
});
