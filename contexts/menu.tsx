import { createContext, useContext, ReactNode } from "react";
import { useMenuClient, IMenuContext } from "../hooks/menu";

let MenuContext: any;
let { Provider } = (MenuContext = createContext<IMenuContext>({
  isOpen: false,
  setIsOpen: () => {},
  handleOpen: () => {},
  handleClose: () => {},
}));

export const useMenuContext = (): IMenuContext => useContext(MenuContext);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const value = useMenuClient();
  return <Provider value={value}>{children}</Provider>;
};
