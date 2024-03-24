interface ImageNavProps {
  activeIdx: number;
  setActiveIdx: Function;
  imagesLen: number;
}

export default function ImageNav({
  activeIdx,
  setActiveIdx,
  imagesLen,
}: ImageNavProps) {
  function handleClick(term: number) {
    setActiveIdx(Math.min(Math.max(activeIdx + term, 0), imagesLen - 1));
  }

  return (
    <>
      <div className="image-slider-nav">
        <button className="project-link" style={{visibility: activeIdx == 0 ? "hidden" : "visible"}} onClick={() => handleClick(-1)}>
          &lt; prev
        </button>
        <button className="project-link" style={{visibility: activeIdx == imagesLen - 1 ? "hidden" : "visible"}} onClick={() => handleClick(1)}>next &gt;</button>
      </div>
    </>
  );
}
