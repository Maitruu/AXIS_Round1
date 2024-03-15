import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import Counter from "./components/counter";
import LoadingScreen from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />
      <Counter />
    </>
  );
}

export default App;
