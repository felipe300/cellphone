import pkg from "lodash";
import moment from "moment";

const { find } = pkg;
const getYear = moment().year();

const cellphone = {
  name: " Pixel 7A",
  brand: "Google",
  dimensions: "15,9x7,8x2,9",
  weight: "310",
  color: "Carbón",
  year: getYear,
};

export default cellphone;
