import './App.css'
import Header from "./components/header/header"
import AddKeeper from "./components/addKeeper/addKeeper"
import ShowKeeper from "./components/showkeeper/showKeeper"
import UpdateCompo from "./components/updateCompo/updateCompo"
import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [keeperList, setKeeperList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/api/getAll")
      .then(res => setKeeperList(res.data))
  }, []);



  return (
    <div className="App">
      <Router basename='/'>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>
            <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
            <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList}/>
          </div>}></Route>
          <Route path="/update/:id" element={<UpdateCompo setKeeperList={setKeeperList}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
