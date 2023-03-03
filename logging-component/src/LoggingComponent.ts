import { Runtime, ComponentInstance } from "wbsr-js";
import { Logger } from "@babymotte/logger-api/Logger";
import { LogLevel } from "./@babymotte/logger-api/LogLevel";

export function component(runtime: Runtime): ComponentInstance {
  const activate = () => {
    console.log("LoggingComponent activated.");

    const logger = runtime.context["@babymotte"]["logger-api"][
      "Logger"
    ] as Logger;

    setInterval(() => {
      logger.log(LogLevel.Err, "Halp! " + new Date());
    }, 1000);
  };

  const deactivate = () => {
    console.log("LoggingComponent deactivated.");
  };

  return { activate, deactivate };
}
