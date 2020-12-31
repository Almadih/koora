function store(response) {
  if (response.value) {
    const finalValue = JSON.stringify(response.value.data.data);
    const key = response.value.config.url;
    localStorage.setItem(key, finalValue);
    console.log("cache response");
  }
}

const fetchCache = (key) => {
  const data = localStorage.getItem(key);
  console.log("loading cached data");
  return data ? JSON.parse(data) : [];
};
const cache = {
  store,
  fetchCache,
};
export default cache;
