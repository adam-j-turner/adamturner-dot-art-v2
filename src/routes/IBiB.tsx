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
  "/img/ibib/16.jpg"
];

export default function IBiB() {
  return (
    <>
      <div className="main">
        <div className="nav-desc">
          <Header />
          <ProjectDescription>
            Sed ligula est, condimentum sed elit et, consequat ullamcorper
            ipsum. Vestibulum posuere sit amet leo nec sodales. Curabitur
            consectetur eget tellus ut tempor. Nulla maximus orci sed justo
            consectetur tincidunt. Integer pulvinar condimentum euismod. Quisque
            interdum quis neque quis venenatis. Etiam dapibus mattis velit at
            congue. Vivamus nec quam non eros dignissim vestibulum. Maecenas
            tincidunt commodo accumsan. Proin aliquet sem ut augue vestibulum,
            vitae sagittis nisl ornare. Sed vel efficitur ipsum. Etiam at arcu
            id elit vestibulum scelerisque. Nulla vel sagittis velit, quis
            suscipit arcu.
          </ProjectDescription>
          <ScrollDirIndicator />
          <ImageSlider paths={images} />
        </div>
      </div>
    </>
  );
}
