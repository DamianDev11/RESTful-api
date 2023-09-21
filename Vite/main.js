import "./style.css";
import sum from "./src/sum";

document.querySelector("#app").innerHTML = sum(1, 2, 3).toString();
