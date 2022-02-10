import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ id, name, url, bookmarks, setBookmarks }) {
  const deleteBookmark = () => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  return (
    <div className=" p-3 rounded-md bg-white/10 cursor-pointer hover:bg-white/20 m-2.5">
      <FontAwesomeIcon
        icon="times"
        title="Delete Bookmark"
        className="float-right cursor-pointer z-20"
        onClick={deleteBookmark}
      />
      <div className="flex flex-row gap-2 text-lg justify-center items-center uppercase mt-5 mr-5">
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`}
          alt=""
          className="w-6 h-6 align-sub"
        ></img>
        <a href={url} target="_blank" rel="noreferrer" className=" hover:underline">
          {name}
        </a>
      </div>
    </div>
  );
}

export default Card;
