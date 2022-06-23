import "./styles.css";

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-links">
                <div className="links-column">
                    <a href=""><p>SIZE GUIDE</p></a>
                    <a href=""><p>RETURN POLICY</p></a>
                    <a href=""><p>IN-STORE PURCHASES</p></a>
                    <a href=""><p>WHERE TO BUY</p></a>
                </div>
                <div className="links-column">
                    <a href=""><p>HELP / CONTACT US</p></a>
                    <a href=""><p>PRESS</p></a>
                    <a href=""><p>PRODUCT RECALLS</p></a>
                    <a href=""><p>CARREERS</p></a>
                </div>
                <div className="links-column">
                    <a href=""><p>TERMS</p></a>
                    <a href=""><p>SHIPPING INFO</p></a>
                    <a href=""><p>PRIVACY POLICY</p></a>
                    <a href=""><p>SUPLY CHAIN DISCLOSURE</p></a>
                </div>
            </div>
            <div className="footer-updates">
                <h4>Get updates from SKALE.</h4>
                <div className="search-bar">
                <input type="search" placeholder="subscribe your e-mail"></input>
                <button>I'm in!</button>
                </div>
            </div>
        </div>
        <div className="rodape">
            <a href=""><p>Conditions of Use</p></a>
            <a href=""><p>Privacy Notice</p></a>
            <a href=""><p>Interest-Based Ads</p></a>
            <a href=""><p>© 1996-2022, Skale.com, Inc.</p></a>
        </div>
    </footer>
  );
}

export default Footer;
