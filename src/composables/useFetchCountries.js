import useFetch from "./useFetch";

const useFetchCountries = (url) => {
  const [startFetch] = useFetch(url);
  let countries;

  const startFetchCountries = async () => {
    const data = await startFetch();
    countries = data.map((country) => {
      return country.name.common;
    });
    countries = countries.sort((a, b) => a.localeCompare(b));
    return countries;
  };

  return [startFetchCountries];
};

export default useFetchCountries;
