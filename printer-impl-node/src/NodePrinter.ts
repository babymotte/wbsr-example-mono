import { Runtime, ServiceInstance } from "wbsr-js";
import { PrintJob } from "./PrintJob";
  
export function service(runtime: Runtime): ServiceInstance {
  const activate = () => {
    console.log("NodePrinter activated.");
    // TODO auto-generated method stub
  };

  const deactivate = () => {
    console.log("NodePrinter deactivated.");
    // TODO auto-generated method stub
  };
    
  const print = (job: PrintJob) => {
    // TODO auto-generated method stub
  };

  return { activate, deactivate, functions: { print } };
}
