import { memo, useCallback, useEffect, useState } from 'react';
import { useReactFlow } from '@xyflow/react';
import type { AppNode } from '@/types/flow';
import { IoMdArrowRoundBack } from 'react-icons/io';
import TextareaAutosize from 'react-textarea-autosize';

type Props = {
  selectedNode: AppNode;
  setSelectedNode: (node: AppNode | null) => void;
};

/** Renders Node data edit panel */
export default memo(function SettingsPanel({
  selectedNode,
  setSelectedNode,
}: Props) {
  const { updateNode, updateNodeData } = useReactFlow();
  const [input, setInput] = useState('');

  // Sync with selected node data
  useEffect(() => setInput(selectedNode.data.text), [selectedNode]);

  // Removes the Settings panel and deselects selected node
  const handleBack = () => {
    setSelectedNode(null);
    updateNode(selectedNode.id, { selected: false });
  };

  // On input change update the selected node
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newText = e.target.value;
      setInput(newText);
      updateNodeData(selectedNode.id, { text: newText });
    },

    [selectedNode, updateNodeData, setInput],
  );

  return (
    <div className="relative w-full rounded-xl bg-white">
      <div className="w-ful mb-1 flex items-center justify-center border-b-2 border-neutral-200 py-1.5">
        <button
          className="absolute left-0 cursor-pointer p-1"
          onClick={handleBack}
        >
          <IoMdArrowRoundBack />
        </button>
        <span className="font-semibold text-shadow-2xs text-shadow-orange-400">
          EDIT NODE
        </span>
      </div>
      <div className="px-2">
        <label htmlFor="textInput" className="font-semibold text-gray-600">
          Text
        </label>
        <TextareaAutosize
          id="textInput"
          value={input}
          onChange={handleChange}
          className="mt-1 h-full w-full rounded border-2 border-neutral-200 px-3 py-2"
          placeholder="Enter message"
          maxRows={5}
        />
      </div>
    </div>
  );
});
