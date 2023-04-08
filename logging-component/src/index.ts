import { wbsrInitComponent, ModuleComponent, ServiceInstance } from "wbsr-js";
import { component } from "./LoggingComponent";

const packageJson: ModuleComponent = require("../package.json");

wbsrInitComponent(packageJson, component);
