import { wbsrInitComponent, ModuleComponent, ServiceInstance } from "wbsr-js";
import { component } from "./LoggingComponent";
import module from "./component.json";

wbsrInitComponent(module as ModuleComponent, component);
