import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <ImageSlider extraLarge={true} paths={["/img/home/1.jpg"]} />
    </div>
  );
}
