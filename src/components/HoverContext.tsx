import React, { createContext, useState, useContext } from 'react';

interface HoverContextType {
  hoveredText: string;
  setHoveredText: React.Dispatch<React.SetStateAction<string>>;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const useHoverContext = () => {
  const context = useContext(HoverContext);
  if (context === undefined) {
    throw new Error('useHoverContext must be used within a HoverProvider');
  }
  return context;
};

export const HoverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hoveredText, setHoveredText] = useState<string>('');

  return (
    <HoverContext.Provider value={{ hoveredText, setHoveredText }}>
      {children}
    </HoverContext.Provider>
  );
};
