import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <div>
            <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Cars From USA
        </p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cars">All cars</Link>
        <Link to="/favorite">Favorite cars</Link>
      </nav>
      </header>
      <Outlet/>
        </div>
    )
}