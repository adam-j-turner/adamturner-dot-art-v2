interface ImageSliderProps {
  paths: string[];
}

export default function ImageSlider({ paths }: ImageSliderProps) {
  const images = paths.map((path) => <img src={path} />);

  return (
    <>
      <div className="image-slider">{images}</div>
    </>
  );
}
