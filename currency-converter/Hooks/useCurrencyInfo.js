import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "USD") {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/e240033e8ce892de72b27e4d/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
