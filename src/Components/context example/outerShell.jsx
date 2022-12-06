import React from "react";
import { APIContextProvider } from "./apiContext";
import Users from "./Users";

export default function App() {
  return (
    // wrap your app (or just components that need to consume the context)
    <APIContextProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        // the Users component sits below the Provider so can consume its context
        <Users />
      </div>
    </APIContextProvider>
  );
}