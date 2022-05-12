import { useState, Dispatch, SetStateAction } from "react";

export interface IMenuContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
}

export const useMenuClient = (): IMenuContext => {
  // State - menu closed by default
  const [isOpen, setIsOpen] = useState(false);

  // Handle menu open
  const handleOpen = () => {
    console.log("handleOpen");
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    console.log("handleClose");
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    handleOpen,
    handleClose,
  };
};
