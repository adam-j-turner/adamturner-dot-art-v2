import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProjectDescription from "../components/ProjectDescription";
import ScrollDirIndicator from "../components/ScrollDirIndicator";

const images = [...Array(23).keys()].map((key) => {
  return {
    small: `/img/ibib/${key + 1}.jpg`,
    large: `/img/ibib/large/${key + 1}.jpg`,
  };
});

export default function IBiB() {
  return (
    <>
      <div className="main">
        <div className="nav-desc">
          <Header />
          <ProjectDescription>
            <i>
              <b>Ysanthem</b>
            </i>{" "}
            is a work in progress.
          </ProjectDescription>
          <ScrollDirIndicator />
          <ImageSlider paths={images} />
        </div>
      </div>
    </>
  );
}
