import { BrowserView, MobileView, isMobile } from "react-device-detect";
import ModalImage from "react-modal-image";

interface ImageSliderProps {
  paths: { small: string; large: string }[];
  extraLarge?: boolean;
}

export default function ImageSlider({
  paths,
  extraLarge = false,
}: ImageSliderProps) {
  const images = paths.map((path) => (
    <>
      <BrowserView>
        <ModalImage
          hideDownload={true}
          hideZoom={true}
          small={path.small}
          large={path.large}
        />
      </BrowserView>
      <MobileView>
        <img src={path.small} />
      </MobileView>
    </>
  ));

  let className = isMobile ? "image-slider-mobile" : "image-slider";
  if (extraLarge) {
    className += " image-slider-xl";
  }

  return (
    <>
      <div className={className}>
        {images}
        <div>&nbsp;</div>
      </div>
    </>
  );
}
