import axios from "axios";
import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://api.exchangerate.host/latest").then(({ data }) => {
      setCountries(data.rates);
    });
  }, []);

  return countries;
};
