import { Dimensions } from "react-native";

const bgDark = require("../assets/images/bg-dark.png");
const onboard1Dark = require("../assets/images/onboard-1-dark.png");
const onboard2Dark = require("../assets/images/onboard-2-dark.png");
const onboard3Dark = require("../assets/images/onboard-3-dark.png");
const welcomeDark = require("../assets/images/welcome-dark.png");
const logoDark = require("../assets/images/logo-dark.png");
const placeholder1 = require("@/assets/images/placeholder1.png");
const placeholder2 = require("@/assets/images/placeholder2.png");

const tick = require("@/assets/images/tick.png");
const home = require("@/assets/images/home.png");
const homeActive = require("@/assets/images/home-active.png");
const search = require("@/assets/images/search.png");
const searchActive = require("@/assets/images/search-active.png");
const library = require("@/assets/images/library.png");
const libraryActive = require("@/assets/images/library-active.png");
const settings = require("@/assets/images/setting.png");

const { height, width } = Dimensions.get("window");

const sizes = { height, width };

const images = {
  bgDark,
  onboard1Dark,
  onboard2Dark,
  onboard3Dark,
  welcomeDark,
  logoDark,
  placeholder1,
  placeholder2,
};

const icons = {
  tick,
  home,
  homeActive,
  search,
  searchActive,
  library,
  libraryActive,
  settings,
};

export { images, sizes, icons };
