import React, { createContext, useContext, useState } from 'react';

export interface QuoteModalInitialData {
  templateId?: string;
  templateName?: string;
  category?: string;
  packageTierId?: string;
  packageTierName?: string;
  businessName?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  initialData: QuoteModalInitialData;
  openQuoteModal: (data?: QuoteModalInitialData) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<QuoteModalInitialData>({});

  const openQuoteModal = (data?: QuoteModalInitialData) => {
    setInitialData(data || {});
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        initialData,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
};

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
