import { LogLevel } from "@babymotte/logger-api/LogLevel";
  
export interface Logger {
  log: (level: LogLevel, message: string) => void

trace: (message: string) => void

debug: (message: string) => void

info: (message: string) => void

warn: (message: string) => void

error: (message: string) => void
}
