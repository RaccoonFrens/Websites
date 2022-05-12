import Social from "./Social";

function Footer() {
  return (
    <footer className="footer-container">
      {/* PROJECT NAME */}
      <h3 className="project-name">Raccoon Frens</h3>

      {/* SOCIALS - Discord, Telegram, Twitter */}
      <section className="socials-footer">
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
      </section>
    </footer>
  );
}

export default Footer;
