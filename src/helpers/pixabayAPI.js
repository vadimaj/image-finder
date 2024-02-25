const BASE_URL = 'https://pixabay.com/api/';
const IMG_PER_PAGE = 12;
async function getImages(searchQuery, page) {
  const res = await fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=34291894-c5b60193cb7b58e4e154e577d&image_type=photo&orientation=horizontal&per_page=${IMG_PER_PAGE}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}
export { getImages, IMG_PER_PAGE };
