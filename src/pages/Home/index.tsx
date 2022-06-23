import Header from "../../components/Header";
import Box from "../../components/Box";
import Menu from "../../components/Menu"
import Footer from "../../components/Footer";
import banner from "../../assets/pictures/banner-carousel.png"
import img1 from "../../assets/pictures/section1.png"
import img2 from "../../assets/pictures/section2.png"
import img3 from "../../assets/pictures/section3.png"
import img4 from "../../assets/pictures/section4.png"
import img5 from "../../assets/pictures/section5.png"
import img6 from "../../assets/pictures/section6.png"
import img7 from "../../assets/pictures/section7.png"
import img8 from "../../assets/pictures/section8.png"
import SectionCard from "../../components/SectionCard";
import "./styles.css"

function Home() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main className="main">
        <Box background="light" size="small">
          <div className="carousel">
          <img src={banner} alt="banner" />
          </div>
        </Box>
        <Box background="dark" size="medium">
        <section id="second-box-content">
          <div className="box-row">
            <SectionCard picture={img1} text="CLIMBING" />
            <SectionCard picture={img2} text="CITY BIKING" />
            <SectionCard picture={img3} text="HIKE AND CAMP" />
            <SectionCard picture={img4} text="BASKETBALL" />
          </div>
          <div className="box-row">
            <SectionCard picture={img5} text="BASEBALL" />
            <SectionCard picture={img6} text="BADMINTON" />
            <SectionCard picture={img7} text="ARCHERY" />
            <SectionCard picture={img8} text="CATEGORY" />
          </div>
        </section>
        </Box>
        <Box background="light" />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;