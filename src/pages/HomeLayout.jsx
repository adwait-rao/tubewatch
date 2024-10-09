import { Link, Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="">Github</Link>
      </nav>
      <Outlet />
      <div>Made with love by Adwait Rao</div>
    </div>
  );
}
