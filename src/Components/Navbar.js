import useSound from "use-sound";
import click from "../sound/click.wav";
import "./Navbar.css";

const Navbar = ({ scrollTo, currentPage }) => {
  const [play] = useSound(click);

  return (
    <nav>
      <ul>
        <li
          className={currentPage === 0 ? "active" : ""}
          onClick={() => {
            scrollTo("sec1", 0);
            play();
          }}
        >
          <i className="fas fa-home"></i>
          <span className="nav-label">Home</span>
        </li>
        <li
          className={currentPage === 1 ? "active" : ""}
          onClick={() => {
            scrollTo("sec2", 1);
            play();
          }}
        >
          <i className="fas fa-user"></i>
          <span className="nav-label">About</span>
        </li>
        <li
          className={currentPage === 2 ? "active" : ""}
          onClick={() => {
            scrollTo("sec3", 2);
            play();
          }}
        >
          <i className="fas fa-project-diagram"></i>
          <span className="nav-label">Projects</span>
        </li>
        <li
          className={currentPage === 3 ? "active" : ""}
          onClick={() => {
            scrollTo("sec4", 3);
            play();
          }}
        >
          <i className="fas fa-envelope"></i>
          <span className="nav-label">Contact</span>
        </li>
        <li
          className={currentPage === 4 ? "active" : ""}
          onClick={() => {
            window.location.href =
              "https://yarazarin.github.io/mern-blog-client/";
            play();
          }}
        >
          <i className="fas fa-blog"></i>
          <span className="nav-label">Blog</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
