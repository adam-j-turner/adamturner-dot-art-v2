import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProjectDescription from "../components/ProjectDescription";
import ScrollDirIndicator from "../components/ScrollDirIndicator";

const images = [
  "/img/ibib/1.jpg",
  "/img/ibib/2.jpg",
  "/img/ibib/3.jpg",
  "/img/ibib/4.jpg",
  "/img/ibib/5.jpg",
  "/img/ibib/6.jpg",
  "/img/ibib/7.jpg",
  "/img/ibib/8.jpg",
  "/img/ibib/9.jpg",
  "/img/ibib/10.jpg",
  "/img/ibib/11.jpg",
  "/img/ibib/12.jpg",
  "/img/ibib/13.jpg",
  "/img/ibib/14.jpg",
  "/img/ibib/15.jpg",
  "/img/ibib/16.jpg",
];

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
