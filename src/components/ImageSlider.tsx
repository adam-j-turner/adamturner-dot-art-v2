interface ImageSliderProps {
  paths: string[];
  activeIdx: number;
}

export default function ImageSlider({ paths, activeIdx }: ImageSliderProps) {
  const images = paths.map((path) => <img src={path} />);

  return (
    <>
      <div className="image-slider">{images[activeIdx]}</div>
    </>
  );
}
