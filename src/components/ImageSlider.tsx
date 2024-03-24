import { isMobile } from "react-device-detect";

interface ImageSliderProps {
  paths: string[];
}

export default function ImageSlider({ paths }: ImageSliderProps) {
  const images = paths.map((path) => <img src={path} />);

  let className = isMobile ? "image-slider-mobile" : "image-slider";

  return (
    <>
      <div className={className}>
        {images}
        <div>&nbsp;</div>
      </div>
    </>
  );
}
