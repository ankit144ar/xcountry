import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const textDec = {
    fontSize: "16px",
    height: "2rem",
  }

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.abbr} style={cardStyle}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={imageStyle}
          />
          <h2 style={textDec}>{country.name}</h2>
        </div>
      ))}
    </div>
  );
}
