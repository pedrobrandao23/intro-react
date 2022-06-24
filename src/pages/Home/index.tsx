import Header from "../../components/Header";
import Box from "../../components/Box";
import Menu from "../../components/Menu"
import Footer from "../../components/Footer";
import SectionCard from "../../components/SectionCard";
import ProductCard from "../../components/ProductCard";


import { banner, img1, img2, img3, img4, img5, img6, img7, img8, product1, product2, product3, product4, product5, product6, product7 } from "../../assets/pictures";

import "./styles.css"

function Home() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main className="main">
        <Box background="dark" size="small">
          <div className="carousel">
            <img src={banner} alt="banner" />
          </div>
        </Box>
        <Box background="light" size="medium">
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
        <Box background="dark">
          <>
            <section className="products-showcase">
              <h4 className="showcase-name">most viewed</h4>
              <div className="products-showcase-row">
                <ProductCard
                  picture={product1}
                  title="Hiking Cap"
                  text="Forclaz Travel 500, Hiking Cap"
                  price="$ 18,00"
                />
                <ProductCard
                  picture={product2}
                  title="Rockrider ST100"
                  text="Mountain Bike, 24'', Kids 4'5'' to 4'11''"
                  price="$ 229,00"
                />
                <ProductCard
                  picture={product3}
                  title="Backpack"
                  text="Arpenaz NH100, Hiking 10 L"
                  price="$ 40,00"
                />
                <ProductCard
                  picture={product4}
                  title="Microfiber Towel"
                  text="Nabaiji, 43.3'' x 68.9'' Ultra Compact Microfiber Towel, XL, Hiking Cap"
                  price="$ 40,00"
                />
              </div>
            </section>
            <section className="products-showcase">
              <h4 className="showcase-name">suggested for you</h4>
              <div className="products-showcase-row">
                <ProductCard
                  picture={product1}
                  title="Hiking Cap"
                  text="Forclaz Travel 500, Hiking Cap"
                  price="$ 18,00"
                />
                <ProductCard
                  picture={product5}
                  title="Tenis Visor"
                  text="Artengo TV100, 22'' Tennis Visor"
                  price="$ 8,00"
                />
                <ProductCard
                  picture={product6}
                  title="Hiking Shoes"
                  text="Quechua NH100 Mid-Height Hiking Shoes, Women's"
                  price="$ 180,00"
                />
                <ProductCard
                  picture={product7}
                  title="Walking Shoes"
                  text="Quechua NH100 Mid-Height Hiking Shoes, Women's"
                  price="$ 50,00"
                />
              </div>
            </section>
          </>
        </Box>
      </main>
        <Footer />
    </div>
  );
}

export default Home;