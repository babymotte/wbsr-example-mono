import { wbsrInitComponent, ModuleComponent, ServiceInstance } from "wbsr-js";

const packageJson: ModuleComponent = require("../package.json");
const { component } = require(`./${packageJson.component}`);

wbsrInitComponent(packageJson, component);
