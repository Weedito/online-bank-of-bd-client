import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ CAData: "", setCAData: null });

export function UseContextProvider({ children }) {
  const [CAData, setCAData] = useState("");

  return (
    <StepperContext.Provider value={{ CAData, setCAData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { CAData, setCAData } = useContext(StepperContext);

  return { CAData, setCAData };
}