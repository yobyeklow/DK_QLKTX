import "./Sidebar.scss";
import logo from "../../../public/dormifyrentLogo.png";
import ItemList from "./ItemList";
import PropTypes from "prop-types";
const Sidebar = ({ itemList }) => {
  return (
    <div className="max-w-[340px] w-full min-h-screen bg-blue-400 sidebar">
      <div className="sidebar-logo w-full flex justify-center py-4 border-2 border-transparent border-b-gray-200">
        <img
          src={logo}
          alt="logo.png"
          className="object-cover h-[90px] w-[200px] cursor-pointer"
        />
      </div>
      <div className="sidebar-link-list flex flex-col px-8 py-10">
        {itemList.map((item, index) => {
          return (
            <ItemList key={index} content={item.content} to={item.to}>
              {item.icon}
            </ItemList>
          );
        })}
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  itemList: PropTypes.array,
};
export default Sidebar;
