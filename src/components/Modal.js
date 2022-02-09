import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ setShowModal }) {
  const hideModal = (e) => {
    if (e.target.id === "modal-bg") {
      setShowModal(false);
    }
  };

  const validateForm = (urlValue) => {
    // creating a regex expression
    const expression =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    const regex = new RegExp(expression);

    // validating url
    if (urlValue.match(regex)) {
      alert("matches");
    }
    if (!urlValue.match(regex)) {
      alert("Please provide a valid web address");
      return false;
    }
    return true;
  };

  const storeBookmark = (e) => {
    e.preventDefault();
    const nameValue = e.target[0].value;
    let urlValue = e.target[1].value;
    if (!urlValue.includes("https://") && !urlValue.includes("http://")) urlValue = `https://${urlValue}`;

    validateForm(urlValue);
    if (!validateForm(urlValue)) return false;
    console.log(nameValue, urlValue);
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 w-screen h-screen bg-black/50 text-black flex items-center justify-center"
      id="modal-bg"
      onClick={hideModal}
    >
      <div className=" bg-white shadow-lg shadow-white/20 max-w-11/12 w-modal m-2 modal">
        <FontAwesomeIcon
          icon="times"
          className="float-right text-2xl relative top-3.5 right-3.5 cursor-pointer text-white"
          onClick={() => setShowModal(false)}
        />
        <div className="modal-header">
          <h3 className="m-0">Add Bookmark</h3>
        </div>
        <div className=" bg-slate-200 p-4">
          <form className=" space-y-6" onSubmit={storeBookmark}>
            <div className="form-group">
              <label htmlFor="website-name" className="form-label">
                Website Name
              </label>
              <input type="text" id="website-name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="website-url" className="form-label">
                Website URL
              </label>
              <input type="text" id="website-url" placeholder="https://example.com" className="form-input" required />
            </div>
            <button className="button" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
