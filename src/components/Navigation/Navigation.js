import { Link,Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
