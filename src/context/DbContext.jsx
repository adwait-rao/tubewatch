import { createContext, useContext } from "react";
import { initDatabase } from "../db/db";

const DatabaseContext = createContext(null);

export function DatabaseProvider({ children }) {
  const dbInstance = initDatabase();

  return (
    <DatabaseContext.Provider value={dbInstance}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);

  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }

  return context;
}
