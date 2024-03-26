import { isMobile } from "react-device-detect";

interface ImageSliderProps {
  paths: string[];
  extraLarge?: boolean;
}

export default function ImageSlider({ paths, extraLarge=false }: ImageSliderProps) {
  const images = paths.map((path) => <img src={path} />);

  let className = isMobile ? "image-slider-mobile" : "image-slider";
  if (extraLarge) { className += " image-slider-xl"}

  return (
    <>
      <div className={className}>
        {images}
        <div>&nbsp;</div>
      </div>
    </>
  );
}
