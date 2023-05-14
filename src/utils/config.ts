import "dotenv/config";
import { Config } from "../interfaces/Config";

let config: Config;

try {
  config = require("../../config.json");
} catch (error) {
  config = {
    TOKEN: process.env.TOKEN || "",
    PREFIX: process.env.PREFIX || "!",
    PRUNING: process.env.PRUNING === "true" ? true : false,
    LOCALE: process.env.LOCALE || "en",
    FOOTER_DESC: process.env.FOOTER_DESC || "Built by Kelo!"
  };
}

export { config };
