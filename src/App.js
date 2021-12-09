import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API = "http://localhost:3000/category";
  const [data, setDate] = useState([]);

  const getData = async () => {
    await fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        setDate(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Тестовое задание</h1>
      <div className="category">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name}
              <ul>
                {item.categories.map((item) => (
                  <li>
                    {item.name}
                    <ul>
                      {item.categories.map((item) => (
                        <li>{item.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
