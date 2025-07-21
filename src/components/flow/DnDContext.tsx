'use client';

import { createContext, useContext, useState } from 'react';

/** Creates Drag and Drop context (Holds dragged node type) */
const DnDContext = createContext<[string | null, (type: string) => void]>([
  null,
  () => {},
]);

/** Wraps child components with Drag and Drop Context */
export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<string | null>(null);

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
};

/** Helps to access Drag and Drop Context (Dragged node type and its setter function)*/
export const useDnD = () => {
  return useContext(DnDContext);
};
