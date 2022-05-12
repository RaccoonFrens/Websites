import Image from "next/image";
import Link from "next/link";
import { Zoom, Slide } from "react-awesome-reveal";
import CosmWatch from "../../public/assets/v3_cosmwatch_web.png";
import Dolphin from "../../public/assets/racoonfrens_dolphin.jpg";
import Remer from "../../public/assets/racoonfrens_remer.jpg";
import Artist from "../../public/assets/racoonfrens_artist.jpg";

function Founders() {
  return (
    <>
      {/* Founders Header */}
      <div className="header-container-founders">
        <h1 className="white">Founders</h1>
      </div>

      {/* Portraits container */}
      <div className="portraits">
        {/* Remer Portrait */}
        <Slide triggerOnce direction="left">
          <div className="portrait">
            <Link href="https://twitter.com/MrRemer01">
              <a className="portrait-img-container">
                <Image
                  className="portrait-img"
                  src={Remer}
                  layout="fill"
                  alt="mr remer co founder"
                  priority={true}
                />
              </a>
            </Link>

            <div className="portrait-text">
              <h1>Mr. Remer</h1>
              <h4>Co-Founder</h4>
            </div>
          </div>
        </Slide>

        {/* Artist Portrait */}
        <Zoom triggerOnce>
          <div className="portrait">
            <Link href="https://twitter.com/NFTichig0">
              <a className="portrait-img-container">
                <Image
                  className="portrait-img"
                  src={Artist}
                  layout="fill"
                  alt="artist"
                  priority={true}
                />
              </a>
            </Link>

            <div className="portrait-text">
              <h1>NFTichig0</h1>
              <h4>Artist</h4>
            </div>
          </div>
        </Zoom>

        {/* Dolphin Portrait */}
        <Zoom triggerOnce>
          <div className="portrait">
            <Link href="https://twitter.com/bluecheezcrypto">
              <a className="portrait-img-container">
                <Image
                  className="portrait-img"
                  src={Dolphin}
                  layout="fill"
                  alt="dolphin co founder"
                  priority={true}
                />
              </a>
            </Link>

            <div className="portrait-text">
              <h1>DaDolphin</h1>
              <h4>Co-Founder</h4>
            </div>
          </div>
        </Zoom>

        {/* CosmWatch Portrait */}
        <Slide triggerOnce direction="right">
          <div className="portrait">
            <Link href="https://twitter.com/cosmwatch">
              <a className="portrait-img-container">
                <Image
                  className="portrait-img"
                  src={CosmWatch}
                  layout="fill"
                  alt="cosm watch"
                  priority={true}
                />
              </a>
            </Link>

            <div className="portrait-text">
              <h1>CosmWatch</h1>
              <h4>Dev</h4>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Founders;
