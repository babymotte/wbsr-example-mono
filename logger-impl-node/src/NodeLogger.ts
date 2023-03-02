import { Runtime, ServiceInstance } from "wbsr-js";
import { LogEntry, LogEntryLevel } from "./@babymotte/logger-api/LogEntry";

export function service(runtime: Runtime): ServiceInstance {
  const activate = () => {
    console.log("NodeLogger activated.");
  };

  const deactivate = () => {
    console.log("NodeLogger deactivated.");
  };

  const log = (entry: LogEntry) => {
    var out;
    switch (entry.level) {
      case LogEntryLevel.Trace:
        out = console.trace;
      case LogEntryLevel.Debug:
        out = console.debug;
      case LogEntryLevel.Info:
        out = console.info;
      case LogEntryLevel.Warn:
        out = console.warn;
      case LogEntryLevel.Err:
        out = console.error;
    }
    out(entry.text);
  };

  return { activate, deactivate, functions: { log } };
}
