'use client';

import { createContext, useContext } from 'react';

export const DotOverlayContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useDotOverlay() {
  return useContext(DotOverlayContext);
}
