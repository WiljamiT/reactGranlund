import "./Footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="footer-infos">
        <p>WT</p>
        <a
          href="https://github.com/WiljamiT/reactGranlund"
          aria-label="Link to Wiljami's GitHub repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
