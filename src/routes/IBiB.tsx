import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProjectDescription from "../components/ProjectDescription";
import ScrollDirIndicator from "../components/ScrollDirIndicator";

const images = [...Array(16).keys()].map((key) => {
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
              <b>I Believe in Bugs</b>
            </i>{" "}
            is a love letter to the late poet, singer and humorist Ivor Cutler
            (1959 - 2006), and is titled after Ivor's song of the same name. It
            explores the personification of, and relationships between, objects,
            insects and animals.
          </ProjectDescription>
          <ScrollDirIndicator />
          <ImageSlider paths={images} />
        </div>
      </div>
    </>
  );
}
