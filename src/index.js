import './style/main.css'
import './style/grid.css'
import './style/table.css'

import LoginBox from "./js/navigation/login.js";
import Animations from "./js/navigation/animations/webStarterAnimations";
import TableAnimations from "./js/table_operations/sortCars";
import {showDataForCars} from "./js/data/showData";

showDataForCars('');
LoginBox.showLoginAndRegistry()
Animations.showAnimations()
TableAnimations.sortCars()