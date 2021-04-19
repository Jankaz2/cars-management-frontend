import './style/main.css'
import './style/grid.css'
import './style/table.css'
import './style/stats.css'
import './style/comparison.css'

import LoginBox from "./js/navigation/login.js";
import Animations from "./js/navigation/animations/webStarterAnimations";
import TableAnimations from "./js/table_operations/sortCars";
import {showDataForCars} from "./js/data/showData";
import StickyNav from "./js/navigation/animations/stickyNav";
import CreateStats from "./js/creator/createStats";
import FilterCars from "./js/data/filterCarsData";
import ComparisonTableFunctions from "./js/creator/createComparisonTable";

showDataForCars('');
LoginBox.showLoginAndRegistry()
Animations.showAnimations()
TableAnimations.sortCars()
StickyNav.useNavigationStickyAndHamburger()
CreateStats.showStats()
FilterCars.filterCarsByBtn()
ComparisonTableFunctions.allComparisonFunctions()