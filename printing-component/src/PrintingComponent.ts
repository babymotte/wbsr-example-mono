import { Runtime, ComponentInstance } from "wbsr-js";
  
export function component(runtime: Runtime): ComponentInstance {
  const activate = () => {
    console.log("PrintingComponent activated.");
    // TODO auto-generated method stub
  };

  const deactivate = () => {
    console.log("PrintingComponent deactivated.");
    // TODO auto-generated method stub
  };

  return { activate, deactivate };
}
