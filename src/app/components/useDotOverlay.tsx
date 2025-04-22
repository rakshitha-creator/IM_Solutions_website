import { createContext, useContext, useState } from 'react';

interface DotOverlayContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DotOverlayContext = createContext<DotOverlayContextType | undefined>(undefined);

export const DotOverlayProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <DotOverlayContext.Provider value={{ isOpen, open, close }}>
      {children}
    </DotOverlayContext.Provider>
  );
};

export const useDotOverlay = () => {
  const context = useContext(DotOverlayContext);
  if (!context) {
    throw new Error('useDotOverlay must be used within a DotOverlayProvider');
  }
  return context;
};
