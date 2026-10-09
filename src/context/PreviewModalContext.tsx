import React, { createContext, useContext, useState } from 'react';
import type { TemplateItem } from '../types';

interface PreviewModalContextType {
  activeTemplate: TemplateItem | null;
  isOpen: boolean;
  openPreview: (template: TemplateItem) => void;
  closePreview: () => void;
}

const PreviewModalContext = createContext<PreviewModalContextType | undefined>(undefined);

export const PreviewModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTemplate, setActiveTemplate] = useState<TemplateItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = (template: TemplateItem) => {
    setActiveTemplate(template);
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
  };

  return (
    <PreviewModalContext.Provider
      value={{
        activeTemplate,
        isOpen,
        openPreview,
        closePreview,
      }}
    >
      {children}
    </PreviewModalContext.Provider>
  );
};

export function usePreviewModal() {
  const context = useContext(PreviewModalContext);
  if (!context) {
    throw new Error('usePreviewModal must be used within a PreviewModalProvider');
  }
  return context;
}
