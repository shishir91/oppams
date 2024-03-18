import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ height: "70vh" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur
        sed reiciendis ad. Incidunt atque mollitia minus est deleniti, minima,
        voluptates optio, culpa nisi sit eius fugit nobis nihil hic!
      </div>
      <Footer />
    </div>
  );
};

export default App;
