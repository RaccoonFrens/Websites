import Link from "next/link";
import Icon from "./Icon";
import Social from "./Social";
import { useMenuContext } from "../contexts/menu";

function Navigation() {
  const { handleOpen } = useMenuContext();

  return (
    // NAVIGATION BAR
    <nav className="nav-container">
      {/* LOGO */}
      <div className="nav-item logo">
        <img
          src="/assets/racoonfrens_icon.png"
          alt="logo"
          width={64}
          height={64}
        />
      </div>

      {/* LINKS - Home & My Collection */}
      <div className="nav-item links">
        <Link href="/">
          <a className="link">Home</a>
        </Link>

        <Link href="/collection">
          <a className="link">My Collection</a>
        </Link>
      </div>

      {/* SOCIALS - Discord, Telegram, Twitter */}
      <div className="nav-item socials">
        <Social
          title="discord"
          link="https://discord.gg/eUswFZNsuy"
          src="/assets/icons/icon_discord.svg"
          size={24}
        />

        <Social
          title="twitter"
          link="https://twitter.com/RaccoonFrensNFT"
          src="/assets/icons/icon_twitter.svg"
          size={24}
        />
      </div>

      {/* MENU (mobile only) */}
      <div className="nav-item menu">
        <button className="menu-button" onClick={handleOpen}>
          {""}
          <Icon
            src="/assets/icons/menu.svg"
            width={36}
            height={36}
            title="menu"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
