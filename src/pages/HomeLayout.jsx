import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="">Github</a>
      </nav>
      <Outlet />
      <div>Made with love by Adwait Rao</div>
    </div>
  );
}
