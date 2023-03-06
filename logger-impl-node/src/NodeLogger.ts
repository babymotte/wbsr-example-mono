import { Runtime, ServiceInstance } from "wbsr-js";
import { LogLevel } from "./@babymotte/logger-api/LogLevel";

export function service(runtime: Runtime): ServiceInstance {
  const activate = () => {
    console.log("NodeLogger activated.");
  };

  const deactivate = () => {
    console.log("NodeLogger deactivated.");
  };

  const log = (level: LogLevel, message: string) => {
    var out;
    switch (level) {
      case LogLevel.Trace:
        out = console.trace;
      case LogLevel.Debug:
        out = console.debug;
      case LogLevel.Info:
        out = console.info;
      case LogLevel.Warn:
        out = console.warn;
      case LogLevel.Err:
        out = console.error;
    }
    out(message);
  };

  const trace = (message: string) => {
    console.trace(message);
  };

  const debug = (message: string) => {
    console.debug(message);
  };

  const info = (message: string) => {
    console.info(message);
  };

  const warn = (message: string) => {
    console.warn(message);
  };

  const error = (message: string) => {
    console.error(message);
  };

  return {
    activate,
    deactivate,
    functions: { log, trace, debug, info, warn, error },
  };
}
