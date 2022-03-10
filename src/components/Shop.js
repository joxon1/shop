import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import GoodsList from "./GoodsList";
import Loader from "./Loader";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      {laoding ? <Loader /> : <GoodsList goods={goods} />}
    </div>
  );
}
