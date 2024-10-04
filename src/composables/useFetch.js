const useFetch = (url) => {

  const startFetch = async () => {
    try {
      let res = await fetch(url);
      if (!res.ok) {
        throw Error("Data not available");
      }
      const d = await res.json();
      return d;
    } catch (err) {
      return err.message;
    }
  };

  return [startFetch];
};

export default useFetch;