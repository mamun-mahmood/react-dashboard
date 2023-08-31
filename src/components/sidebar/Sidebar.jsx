import { useState } from "react";
import { svg } from "../../assets/svg";
import "./Sidebar.css";
const Sidebar = () => {
  const [active, setActive] = useState("/dashboard");
  const sidebarMenus = [
    {
      name: "Dashboard",
      icon: svg.dashboard,
      link: "/dashboard",
    },
    {
      name: "Market",
      icon: svg.market,
      link: "/market",
    },
    {
      name: "Transactions",
      icon: svg.transaction,
      link: "/transactions",
    },
    {
      name: "Profile",
      icon: svg.porfile,
      link: "/profile",
    },
    {
      name: "Setting",
      icon: svg.setting,
      link: "/setting",
    },
    {
      name: "Help",
      icon: svg.help,
      link: "/help",
    },
    {
      name: "Logout",
      icon: svg.logout,
      link: "/logout",
    },
  ];
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {svg.logo}{" "}
          <span className="company-name">
            Blue<span style={{ color: "var(--text-color)" }}>Trade.</span>
          </span>
        </div>
        {sidebarMenus.map((menu, index) => (
          <div key={index}>
            <button
              className="menu-sidebar-option"
              onClick={() => setActive(menu.link)}
              style={{
                background: `${
                  active === menu.link ? "var( --menu-active-bg-color)" : ""
                }`,
              }}
            >
              <span className="sidebar-option-icon">{menu.icon}</span>
              {menu.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
