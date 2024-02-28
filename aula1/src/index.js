import React from "react";
import env from "react-dotenv";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  const stylesElement1 = () => {
    return {
      backgroundColor: "rgb(220,220,220)",
      width: "60%",
      border: "solid black 1px",
      borderRadius: 5,
      padding: 10,
      margin: "auto",
    };
  };

  const racers = [
    {
      name: "Lightning McQueen",
      pic: require("./images/mac.jpg"),
    },
    {
      name: "Mater",
      pic: env.img,
    },
    {
      name: "Doc Hudson",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYdWpgdLnUiLcnquzej0gFP6IDA51kqs2rg&usqp=CAU",
    },
  ];

  return (
    <div style={stylesElement1()}>
      <h1 style={{ fontSize: 15, textAlign: "center" }}>Racers</h1>
      <div
        style={{
          margin: "auto",
          width: "90%",
          border: "solid rgb(190,190,190) 1px",
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        {racers.map(function (racer, i) {
          return (
            <div className="racer">
              <div className="div-pic">
                <img
                  alt={`${racer.name}`}
                  src={racer.pic}
                  className="pic"
                ></img>
              </div>
              <p className="name">{racer.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
