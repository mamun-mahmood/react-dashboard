import { svg } from "../../assets/svg";
import "./Sidebar.css";
const Sidebar = () => {
  const sidebarMenus = [
    {
      name: "Dashboard",
      icon: "fa fa-dashboard",
      link: "/dashboard",
    },
    {
      name: "Market",
      icon: "fa fa-shopping-cart",
      link: "/market",
    },
    {
      name: "Transactions",
      icon: "fa fa-exchange",
      link: "/transactions",
    },
    {
      name: "Profile",
      icon: "fa fa-user",
      link: "/profile",
    },
    {
      name: "Setting",
      icon: "fa fa-cog",
      link: "/setting",
    },
    {
      name: "Help",
      icon: "fa fa-question-circle",
      link: "/help",
    },
    {
      name: "Logout",
      icon: "fa fa-sign-out",
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
          {svg.logo} {svg.bludeTrade}
        </div>
        {sidebarMenus.map((menu, index) => (
          <div key={index}>
            <button className="menu-sidebar-option">{menu.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
