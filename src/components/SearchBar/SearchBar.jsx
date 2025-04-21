import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const toastId = "id-toast";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      if (toast.id === "id-toast") {
        return;
      }
      toast.success("Please, enter text to search ", {
        id: toastId,
        duration: 2500,
        position: "top-center",
        removeDelay: 500,
        className: "toast",
        icon: "!",
      });

      return;
    }
    onSubmit(query);

    setQuery("");
  };
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="text"
            value={query}
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster
            toastOptions={{
              style: {
                // border: "1px solid rgb(218, 215, 208)",
                padding: "16px",
                background:
                  "linear-gradient(210deg, transparent 5%, rgba(239, 234, 234, 0.69) 6%,rgba(10, 2, 243, 0.28) 17%,rgba(3, 23, 247, 0.99) 20%, transparent 73%,transparent 100%)",
                color: "rgb(230, 223, 223)",
                backgroundColor: "rgb(10, 9, 9)",
              },
            }}
          />
        </form>
      </header>
    </>
  );
}
// toast("Hello World", {
//   duration: 4000,
//   position: "top-center",

//   // Styling
//   // style: {},
//   // className: "",

//   // Custom Icon
//   icon: "👏",

//   // Change colors of success/error/loading icon
//   iconTheme: {
//     primary: "#000",
//     secondary: "#fff",
//   },

//   // Aria
//   ariaProps: {
//     role: "status",
//     "aria-live": "polite",
//   },

//   // Additional Configuration
//   removeDelay: 1000,
// });
