import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form.js";
import List from "./List.js";

function App() {
  const API_URL = " https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Data not received ");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      {isLoading && <p> Loading Items....</p>}
      {fetchError && <p>{`Error: ${fetchError}`}</p>}
      <Form reqType={reqType} setReqType={setReqType}></Form>
      <List items={items} />
    </div>
  );
}

export default App;
