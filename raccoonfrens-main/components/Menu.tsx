import { useMenuContext } from "../contexts/menu";
import Link from "next/link";
import Icon from "./Icon";

function Menu() {
  const { isOpen, handleClose } = useMenuContext();
  let menuClasses = "menu-container";

  isOpen
    ? (menuClasses = "menu-container open")
    : (menuClasses = "menu-container");

  return (
    <section className={menuClasses}>
      <a className="menu-exit" onClick={handleClose}>
        <Icon
          src="/assets/icons/close.svg"
          width={36}
          height={36}
          title={"exit"}
        />
      </a>

      <Link href="/">
        <a className="menu-link" onClick={handleClose}>
          Home
        </a>
      </Link>

      <Link href="/collection">
        <a className="menu-link" onClick={handleClose}>
          My Collection
        </a>
      </Link>
    </section>
  );
}

export default Menu;
