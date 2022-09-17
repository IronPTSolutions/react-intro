import React from "react";
import "./App.css";
import Button from "./components/misc/Button/Button";

const App = () => {
  const name = "Carmen";
  const products = [
    {
      name: "DVD",
      price: "3$",
    },
    {
      name: "HBO Subscription",
      price: "30$",
    },
    {
      name: "Neflix",
      price: "13$",
    },
    {
      name: "VHS",
      price: "5$",
    },
  ];

  const sayHiToUser = () => {
    console.log(`Hi ${name}`);
  };

  return (
    <div className="App">
      {/* SIEMPRE CLASSNAME NO CLASS!!*/}
      <header className="App-header">
        {name && <h2>Hi {name}</h2>}
        {name === "Carmen" ? <h2>Hi {name}</h2> : <h2>Hi user</h2>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {products.map(({ name, price }, i) => {
            return (
              <div key={name}>
                {/* SIEMPRE incluir el key (intentar no usar i)*/}
                <p>{name}</p>
                <span>{price}</span>
              </div>
            );
          })}
        </div>
        <Button size="XL" action={sayHiToUser} />
        {/* Componente sin cierre de tag, con props. NO VIENE CHILDREN*/}
        <Button size="XL" action={sayHiToUser}>
          {/* Componente con apertura y cierre de tag, con props. SI VIENE CHILDREN -> "Comprar"*/}
          Comprar
        </Button>
        <Button size="L" action={sayHiToUser}>
          Vender
        </Button>
        <Button action={sayHiToUser}>Pagar</Button>
      </header>
    </div>
  );
};

export default App;
