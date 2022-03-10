import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Loader from "./Loader";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

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
      <Cart quantity={order.length} />
      {laoding ? <Loader /> : <GoodsList goods={goods} />}
    </div>
  );
}
