import { createContext, useState } from "react";
import { ContextType, Tema } from "../../types/Types";

const AppContext = createContext<ContextType>({});

export function AppProvider(props: any) {
  const [tema, setTema] = useState<Tema>("light");

  function alterarTema() {
    setTema(tema === "light" ? "dark" : "light");
    console.log(tema);
  }
  return (
    <AppContext.Provider
      value={{
        tema: tema,
        alterarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
