import "bootstrap/dist/css/bootstrap.css";
import "./Styles/style.css";
import "./Styles/toggle.css";
import getCity from "./Scripts/form";
import logo from "./Images/tabIcon.png";
import changeDisplay from "./Scripts/controls";

// Change website icon
const icon = document.createElement("link");
icon.rel = "icon";
icon.href = logo;
document.getElementsByTagName("head")[0].appendChild(icon);

getCity();

// Call control buttons activate function
changeDisplay();
