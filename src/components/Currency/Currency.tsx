import { useEffect, useState } from "react";

type Response = {
  date: string;
  rates: {
    USD: number | bigint;
    EUR: number | bigint;
    GBP: number | bigint;
  };
};
export const Currency = () => {
  useEffect(() => {
    fetch("https://v1.apiplugin.io/v1/currency/pQCRdfYd/rates?source=RUB")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const [data, setData] = useState<Response | null>(null);

  let usd = "";
  let eur = "";
  let gbp = "";

  if (data?.rates.USD) {
    usd = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "USD",
    }).format(data?.rates.USD);
  }

  if (data?.rates.EUR) {
    eur = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "EUR",
    }).format(data?.rates.EUR);
  }

  if (data?.rates.GBP) {
    gbp = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(data?.rates.GBP);
  }

  let date = "";
  if (data?.date) {
    date = new Intl.DateTimeFormat("ru-RU", { timeZoneName: "long" }).format(
      new Date(data.date)
    );
  }
  return (
    <div>
      <h1>Курс рубля</h1>
      <div>{usd}</div>
      <div>{eur}</div>
      <div>{gbp}</div>
      <div>Дата: {date}</div>
    </div>
  );
};
