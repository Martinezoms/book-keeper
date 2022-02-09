import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./App.css";

library.add(faS, faTimes);

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App text-white ">
      <div
        className="p-5 rounded-md bg-white/10 cursor-pointer w-64 text-center text-xl my-5 mx-auto select-none uppercase hover:bg-white/20"
        onClick={() => setShowModal(true)}
      >
        <h1>add bookmark</h1>
      </div>
      <div className="flex flex-row xs:flex-col flex-wrap container">
        <Card />
        <Card />
        <Card />
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
