import Header from "../../components/Header";
import Box from "../../components/Box";
import Menu from "../../components/Menu"
import Footer from "../../components/Footer";
import "./styles.css"


function Home() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main className="main">
        <Box background="light" size="small">
          <>
          <p>sadas</p>
          </>
        </Box>
        <Box background="dark" size="medium" />
        <Box background="light" />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;