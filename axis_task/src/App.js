import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/navbar";
import Counter from "./components/counter";
import LoadingScreen from "./components/loading";
import Footer from "./components/footer";
import Desk from "./components/desk";
import Events from "./components/events";
import Hero from "./components/hero";

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
      <Hero />
      <Desk />
      <Counter />
      <Events />
      <Footer />
    </>
  );
}

export default App;
