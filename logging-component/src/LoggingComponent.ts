import { Runtime, ComponentInstance } from "wbsr-js";
import { Logger } from "@babymotte/logger-api/Logger";
import { LogLevel } from "./@babymotte/logger-api/LogLevel";

export function component(runtime: Runtime): ComponentInstance {
  const activate = () => {
    console.log("LoggingComponent activated.");
    const logger = runtime.context["@babymotte"]["logger-api"][
      "Logger"
    ] as Logger;
    logger.log(LogLevel.Info, "Hello, world!");
  };

  const deactivate = () => {
    console.log("LoggingComponent deactivated.");
  };

  return { activate, deactivate };
}
