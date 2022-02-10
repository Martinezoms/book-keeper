import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./App.css";

library.add(faS, faTimes);

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = () => {
    if (localStorage.getItem("bookmarks")) {
      setBookmarks(JSON.parse(localStorage.getItem("bookmarks")));
    }
  };

  const saveBookmark = (bookmark) => {
    const newBookmarks = [...bookmarks, bookmark];
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  return (
    <div className="App text-white ">
      <div
        className="p-5 rounded-md bg-white/10 cursor-pointer w-64 text-center text-xl my-5 mx-auto select-none uppercase hover:bg-white/20"
        onClick={() => setShowModal(true)}
      >
        <h1>add bookmark</h1>
      </div>
      <div className="flex flex-row xs:flex-col flex-wrap container m-auto justify-center">
        {bookmarks.map((bookmark, i) => {
          return <Card {...bookmark} key={i} bookmarks={bookmarks} setBookmarks={setBookmarks} />;
        })}
      </div>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          bookmarks={bookmarks}
          saveBookmark={saveBookmark}
          fetchBookmarks={fetchBookmarks}
        />
      )}
    </div>
  );
}

export default App;
