import { Connection } from "worterbuch-js";
import { LogLevel } from "@babymotte/logger-api/LogLevel";
  
export interface Logger {
  log: (level: LogLevel, message: string) => void
}
