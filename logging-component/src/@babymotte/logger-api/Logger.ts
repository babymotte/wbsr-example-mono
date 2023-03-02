import { LogEntry } from "@babymotte/logger-api/LogEntry";
  
  export interface Logger {
    log: (entry: LogEntry) => void
  }