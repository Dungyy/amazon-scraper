import {useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState("");
  const FetchData = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setData(res.data[0].excuse);
      }
    );

    return (
      <div className='app-header'>
        <h1>Generate an excuse</h1>
        <button onClick={() => FetchData("party")}>Party</button>
        <button onClick={() => FetchData("family")}>Family</button>
        <button onClick={() => FetchData("office")}>Office</button>
        <p>{data}</p>
      </div>
    );
  };
}
export default App;
