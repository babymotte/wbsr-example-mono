import { wbsrInitService, ModuleServiceProvider } from "wbsr-js";

const packageJson: ModuleServiceProvider = require("../package.json");
const { service } = require(`./${packageJson.service.name}`);

wbsrInitService(packageJson, service);
