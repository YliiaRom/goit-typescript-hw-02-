import axios from "axios";

const API_KEY = "PY0OcrbLB7wbYiTT8GOPo1TW2_-ELsSSNvf2az-AVvg";
const BASE_URL = "https://api.unsplash.com/";

export const getPhotosFromUnsplash = async (query, page) => {
  // const { data } = await axios.get(
  //   `${BASE_URL}/search/photos/?client_id=${API_KEY}&orientation=landscape&page=${page}&query=${query}`
  // );
  const { data } = await axios.get(`${BASE_URL}/search/photos/`, {
    params: {
      client_id: API_KEY,
      orientation: "landscape",
      page: page,
      query: query,
    },
  });

  //   const { data } = await axios.get(`${BASE_URL}/search/photos`, {
  //     params: {
  //       client_id: API_KEY,
  //       page: page,
  //       query: query,
  //     },
  //   });

  return data;
};
// axios.defaults.baseURL = "https://api.unsplash.com/";
// axios.defaults.headers.common[`Authorization`] = `client_id=${API_KEY}`;
// axios.defaults.params = {
//   per_page: 10,
//   orientation: "landscape",
// };
//params: {
//client_id: ${API_KEY},
//orientation:landscape,
//page: page,
//query: query,
//}

//
//"PY0OcrbLB7wbYiTT8GOPo1TW2_-ELsSSNvf2az-AVvg";
//721159
//iuv0E0xdFz42c_EwJJb6UEbbrKV2b7DghQusSPROO9M
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
//GET / search / photos;
//GET /photos/random
//<https://api.unsplash.com/search/photos?page=1&query=office>;
//getPhotosFromUnsplash({ query: "home", page: 5 });

// results
// :
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// total
// :
// 10
// total_pages
// :
// 1
// [[Prototype]]
// :
// Object
