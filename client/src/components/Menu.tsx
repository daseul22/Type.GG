import React from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  link: string;
}

function Menu() {
  const menu: MenuItem[] = [
    { name: "#집에있자", link: "/" },
    { name: "챔피언 분석", link: "/champion" },
    { name: "랭킹", link: "/ranking" },
    { name: "커뮤니티", link: "/community" },
  ];
  return (
    <div className="l-menu">
      <ul className="menu">
        {menu.map(({ name, link }, id) => {
          return (
            <li key={id} className="menu_item">
              <Link className="target" to={link}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
