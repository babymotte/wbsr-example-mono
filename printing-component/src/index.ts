import { wbsrInitComponent, ModuleComponent, ServiceInstance } from "wbsr-js";

const packageJson: ModuleComponent = require("../package.json");
const moduleComponent = packageJson.component;
const serviceReferences = packageJson.serviceReferences;
const { component } = require(`./${moduleComponent}`);

wbsrInitComponent(moduleComponent, serviceReferences, component);
