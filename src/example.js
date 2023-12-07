const getInfo = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data))
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false);
    });
};
useEffect(() => {
  getInfo();
}, []);
