import '../style/main.css'
import '../style/grid.css'
import '../style/table.css'
import '../style/stats.css'
import '../style/comparison.css'
import '../style/darkmode.css'
import '../style/responsive.css'

import LoginBox from "./navigation/login.js";
import Animations from "./navigation/animations/webStarterAnimations";
import TableAnimations from "./table_operations/sortCars";
import {showDataForCars} from "./data/showData";
import StickyNav from "./navigation/animations/stickyNav";
import CreateStats from "./creator/createStats";
import FilterCars from "./table_operations/filterCarsData";
import ComparisonTableFunctions from "./creator/createComparisonTable";
import slider from "./creator/sliderCrator";
import DarkModeCreator from "./creator/darkModeCreator";
import HamburgerNavigation from "./navigation/animations/hamburgerNav";
import SmoothScrollToSection from "./web_animations/smoothScrolling";

showDataForCars('');
LoginBox.showLoginAndRegistry()
Animations.showAnimations()
TableAnimations.sortCars()
StickyNav.useNavigationStickyAndHamburger()
CreateStats.showStats()
FilterCars.filterCarsByBtn()
ComparisonTableFunctions.allComparisonFunctions()
slider()
DarkModeCreator.switchThemeMode()
HamburgerNavigation.showHamburgerNavOptionsTurnOff()
SmoothScrollToSection.scrollToSection()