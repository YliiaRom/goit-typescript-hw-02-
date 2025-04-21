import axios from "axios";
import { useState, useEffect, cache } from "react";
import "./App.css";
import { getPhotosFromUnsplash } from "./components/getPhotos";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [visibleBtnMore, setVisibleBtnMore] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSearchQuery = (valueInput) => {
    if (valueInput.trim() === "") {
      setLoader(true);
      return;
    }
    if (valueInput !== query.split(`/`)[0]) {
      setPhotos([]);
    }

    setQuery(`${valueInput}/${Date.now()}`);
    setPage(1);
    setPhotos([]);
  };
  useEffect(() => {
    if (query.split(`/`)[0] === "") {
      return;
    }
    async function getPhotos() {
      try {
        setError(false);
        setLoader(true);
        const fetchData = await getPhotosFromUnsplash(
          query.split(`/`)[0],
          page
        );

        const data = fetchData.results;
        setPhotos((firstGalleryPhotos) => {
          return [...firstGalleryPhotos, ...data];
        });
        // setPhotos(data);

        if (fetchData.total_pages > 1) {
          setVisibleBtnMore(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getPhotos();
  }, [page, query]);
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchQuery} />
      {error && <ErrorMessage />}

      <ImageGallery items={photos} onImageClick={openModal} />
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      >
        <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%" }} />
      </ImageModal>

      {loader && <Loader />}
      {/* <Loader /> */}
      {visibleBtnMore && !loader && (
        <LoadMoreBtn
          onClick={() => {
            setPage(page + 1);
          }}
        />
      )}
    </>
  );
}

export default App;
