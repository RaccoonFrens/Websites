import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import useWindowSize from "../../hooks/useWindowDimensions";

function About() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="vertical-about-container">
        <div className="header-container-about">
          <h1>About</h1>
        </div>

        <div className="content-container">
          {/* Description */}
          <Slide triggerOnce direction="left">
            <div className="left-container">
              <p className="description">
                RaccoonFrens is a collection of 4444 randomly generated digital
                raccoons rummaging through the Cosmo’s ecosystem. The collection
                has a strong focus on community and building value from the
                ground up. Post-mint all decisions will be voted on by the DAO
                in order to deliver value that best represents the community.
              </p>

              {/* Call to action buttons */}
              <div className="button-container">
                <Link href="https://twitter.com/RaccoonFrensNFT">
                  <a>
                    <button>Follow us on Twitter</button>
                  </a>
                </Link>

                <Link href="https://discord.gg/eUswFZNsuy">
                  <a>
                    <button>Join our Discord</button>
                  </a>
                </Link>
              </div>
            </div>
          </Slide>

          {/* Breakpoint to switch between video/gif */}
          {width && width > 500 ? (
            // Cycling photos - video
            <div className="video-container">
              <video autoPlay muted loop className="video">
                <source
                  src="/assets/RaccoonFrensCollage.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            // Cycling photos - GIF
            <div className="video-container">
              <img
                src="/assets/RaccoonFrensCollage.gif"
                alt="Raccoon Frens cycling NFTs"
                className="gif"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default About;
