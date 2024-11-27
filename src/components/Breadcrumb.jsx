import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb-nav">
      <div className="breadcrumb-content">
        <Link to="/" className="home-link">
          <Home className="home-icon" />
          <span>Homepage</span>
        </Link>

        {pathnames.length > 0 && (
          <>
            <span className="separator">{">>"}</span>
            <span className="current-page">
              {pathnames[pathnames.length - 1]?.replace(/-/g, " ")}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Breadcrumb;
