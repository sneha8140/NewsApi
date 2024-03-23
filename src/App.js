import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import News from "./component/News";
function App() {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("in");

  return (
    <>
      <Header
        setCategory={setCategory}
        setCountry={setCountry}
        selectedCountry={country}
      />
      <News category={category} country={country} />
    </>
  );
}

export default App;
