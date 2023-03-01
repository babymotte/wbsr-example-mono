import { wbsrInitService, ModuleServiceProvider, ServiceInstance } from "wbsr-js";

const packageJson: ModuleServiceProvider = require("../package.json");
const moduleService = packageJson.service;
const serviceReferences = packageJson.serviceReferences;
const { service } = require(`./${moduleService.name}`);

wbsrInitService(moduleService, serviceReferences, service);
