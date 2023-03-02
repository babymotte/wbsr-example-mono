import { Runtime, ComponentInstance } from "wbsr-js";
import { Logger } from "@babymotte/logger-api/Logger";
import { LogEntryLevel } from "@babymotte/logger-api/LogEntry";

export function component(runtime: Runtime): ComponentInstance {
  const activate = () => {
    console.log("LoggingComponent activated.");
    const logger = runtime.context["@babymotte"]["logger-api"][
      "Logger"
    ] as Logger;
    run(logger);
  };

  const deactivate = () => {
    console.log("LoggingComponent deactivated.");
  };

  return { activate, deactivate };
}

function run(logger: Logger) {
  logger.log({ level: LogEntryLevel.Info, text: "I'm ALIVE!!!" });
}
