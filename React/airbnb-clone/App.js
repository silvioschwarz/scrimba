import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./data";

export default function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
        // {...card}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-container">
        {cards}
      </section>
    </div>
  );
}
