import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProjectDescription from "../components/ProjectDescription";
import ScrollDirIndicator from "../components/ScrollDirIndicator";

const images = [...Array(22).keys()].map((key) => {
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
            seeks to extend the Midwestern landscape into the genre of 'magical realism.' Comprising over ten years’ work, this narrative inextricably ties the realms of fantasy and reality, shifting unexpectedly from rural America to placeless storybook scenes, then back again.
          </ProjectDescription>
          <ScrollDirIndicator />
          <ImageSlider paths={images} />
        </div>
      </div>
    </>
  );
}
