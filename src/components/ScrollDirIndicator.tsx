import { BrowserView, MobileView } from "react-device-detect";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function ScrollDirIndicator() {
  return (
    <>
      <BrowserView>
        <div className="scroll-dir-indicator">
          <p>Scroll</p>
          <FaArrowRight />
        </div>
      </BrowserView>

      <MobileView>
        <div className="scroll-dir-indicator">
          <p>Scroll</p>
          <FaArrowDown />
        </div>
      </MobileView>
    </>
  );
}
