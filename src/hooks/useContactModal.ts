import { useState } from 'react';

export const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  return { isOpen, openContactModal, closeContactModal };
};