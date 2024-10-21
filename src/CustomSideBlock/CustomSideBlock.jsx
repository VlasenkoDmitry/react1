import "./CustomSideBlock.css";
import dashboard from "./../assets/dashboard.png";
import logo from "./../assets/logo.svg";
import CustomMenu from "./../CustomMenu/CustomMenu";
import { menuData } from "./../menuData.jsx";

export default function CustomSideBlock() {


  return (
    <>
      <div className="custom-side-block">
        <div className="logo">
          <div className="logo-dashboard">
            <img className="symbol" src={logo} alt="" />
            <img className="title" src={dashboard} alt="dashboard" />
          </div>

          <div className="version">
            <p>v.01</p>
          </div>
        </div>
        <div className="menu">
          <CustomMenu file={menuData} />
        </div>
      </div>
    </>
  );
}
