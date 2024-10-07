import "./Footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div></div>
      <div className="footer-infos">
        <p>WT</p>
        <a href="github.com">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
