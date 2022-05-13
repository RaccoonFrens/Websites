import Background from "./background";
import { Zoom } from "react-awesome-reveal";

function Hero() {
  const mintHandler = () => {
    console.log("pressed mint!");
  };

  return (
    <>
      {/* BACKGROUND */}
      <Background>
        {/* HERO CONTENT */}
        <Zoom triggerOnce className="hero-content">
          <section className="hero-container">
            <img
              src="/assets/racoonfrens_header.png"
              alt="raccoon frens logo"
              className="hero-container-img"
            />

            <button onClick={mintHandler} className="hero-title-button">
              Mint
            </button>
          </section>
        </Zoom>
      </Background>
    </>
  );
}

export default Hero;
