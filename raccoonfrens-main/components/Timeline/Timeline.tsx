import SVG from "react-inlinesvg";
import { Slide, Fade } from "react-awesome-reveal";

function Timeline() {
  return (
    <>
      <div className="header-container-timeline">
        <h1>Timeline</h1>
      </div>

      <div className="timeline-content">
        <Slide triggerOnce direction="left">
          <div className="timeline-item item-left">
            <h3>Phase 1</h3>
            <ul>
              <li>Create Twitter, Discord, and Tiktok</li>
              <li>Giveaways</li>
              <li>Launch Website</li>
              <li>Mint</li>
              <li>Distribution</li>
            </ul>
          </div>
        </Slide>

        <Fade
          triggerOnce
          duration={2000}
          className="timeline-connector-container"
        >
          <SVG
            src="/assets/dottedline_left_right.svg"
            width="100%"
            height="100%"
            className="timeline-connector"
          />
        </Fade>

        <Slide
          triggerOnce
          direction="right"
          className="timeline-item-container"
        >
          <div className="timeline-item item-right">
            <h3>Phase 2</h3>
            <ul>
              <li>
                Verified holders get access to “The Dumpster - verified discord”
              </li>
              <li>Grow treasury through royalties</li>
              <li>Establish DAO</li>
              <li>Have community votes on development proposals</li>
              <li>Host community games</li>
              <li>Host podcasts and Q&A&apos;s</li>
            </ul>
          </div>
        </Slide>

        <Fade
          triggerOnce
          duration={2000}
          className="timeline-connector-container"
        >
          <SVG
            src="/assets/dottedline_right_left.svg"
            width="100%"
            height="100%"
            className="timeline-connector"
          />
        </Fade>

        <Slide triggerOnce direction="left">
          <div className="timeline-item item-left">
            <h3>Phase 3</h3>
            <ul>
              <li>Merch</li>
              <li>Comic book (story voted on by DAO)</li>
              <li>Hand drawn paintings by our artist</li>
              <li>Raccoon evolution</li>
            </ul>
          </div>
        </Slide>

        <Fade
          triggerOnce
          duration={2000}
          className="timeline-connector-container"
        >
          <SVG
            src="/assets/dottedline_left_right.svg"
            width="100%"
            height="100%"
            className="timeline-connector"
          />
        </Fade>

        <Slide
          triggerOnce
          direction="right"
          className="timeline-item-container"
        >
          <div className="timeline-item item-right">
            <h3>Final Phase</h3>
            <ul>
              <li>Future endeavors decided by DAO</li>
            </ul>
          </div>
        </Slide>

        <Fade
          triggerOnce
          duration={2000}
          className="timeline-connector-container"
        >
          <SVG
            src="/assets/dottedline_right_left_x.svg"
            width="100%"
            height="100%"
            className="timeline-connector"
          />
        </Fade>
      </div>
    </>
  );
}

export default Timeline;
