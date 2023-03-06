import { Runtime, ComponentInstance } from "wbsr-js";
import { Logger } from "@babymotte/logger-api/Logger";

export function component(runtime: Runtime): ComponentInstance {
  const activate = () => {
    console.log("LoggingComponent activated.");
    const logger = runtime.context["@babymotte"]["logger-api"][
      "Logger"
    ] as Logger;

    setInterval(() => {
      logger.warn("This is a warning! " + new Date());
    }, 2000);
  };

  const deactivate = () => {
    console.log("LoggingComponent deactivated.");
  };

  return { activate, deactivate };
}
