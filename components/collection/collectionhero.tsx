import Background from "../background";
import { Zoom } from "react-awesome-reveal";

function CollectionHero() {
  const loadCollectionHandler = () => {
    console.log("pressed mint!");
  };

  return (
    <>
      {/* BACKGROUND */}
      <Background>
        {/* HERO CONTENT */}
        <Zoom triggerOnce className="hero-content">
          <section className="hero-container">
            <button
              onClick={loadCollectionHandler}
              className="hero-title-button"
            >
              Load Collection
            </button>
          </section>
        </Zoom>
      </Background>
    </>
  );
}

export default CollectionHero;
