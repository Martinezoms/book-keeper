import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card() {
  return (
    <div className=" p-3 rounded-md bg-white/10 cursor-pointer hover:bg-white/20 m-2.5">
      <FontAwesomeIcon icon="times" title="Delete Bookmark" className="float-right cursor-pointer z-20" />
      <div className="flex flex-row gap-2 text-lg justify-center items-center uppercase mt-5 mr-5">
        <img
          src="https://s2.googleusercontent.com/s2/favicons?domain=www.google.com"
          alt=""
          className="w-6 h-6 align-sub"
        ></img>
        <a href="https://google.com" target="_blank" rel="noreferrer" className=" hover:underline">
          google
        </a>
      </div>
    </div>
  );
}

export default Card;
