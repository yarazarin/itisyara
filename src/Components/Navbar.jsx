import "./Navbar.css";

const Navbar = ({ scrollTo, currentPage }) => {

  return (
    <nav>
      <ul>
        <li
          className={currentPage === 0 ? "active" : ""}
          onClick={() => {
            scrollTo("sec1", 0);
          }}
        >
          <i className="fas fa-home"></i>
          <span className="nav-label">Home</span>
        </li>
        <li
          className={currentPage === 1 ? "active" : ""}
          onClick={() => {
            scrollTo("sec2", 1);
          }}
        >
          <i className="fas fa-user"></i>
          <span className="nav-label">About</span>
        </li>
        <li
          className={currentPage === 2 ? "active" : ""}
          onClick={() => {
            scrollTo("sec3", 2);
          }}
        >
          <i className="fas fa-project-diagram"></i>
          <span className="nav-label">Projects</span>
        </li>
        <li
          className={currentPage === 3 ? "active" : ""}
          onClick={() => {
            scrollTo("sec4", 3);
          }}
        >
          <i className="fas fa-envelope"></i>
          <span className="nav-label">Contact</span>
        </li>

        <div id="blog-button">
          <li
            className=""
            onClick={() => {
              window.location.href = "https://yarablog.netlify.app";
            }}
          >
            <i className="fas fa-blog"></i>
            <span className="nav-label">Blog</span>
          </li>
        </div>

      </ul>
    </nav>
  );
};

export default Navbar;
