import { useEffect, useState } from "react";

export default function ApiCall() {
  const [value, setValue] = useState("");
  const [product, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${value}`
    );
    const data = await response.json();
    console.log(data.products);
    setProducts([...data.products]);
  };
  useEffect(() => {
    const interval = setTimeout(function () {
      fetchProduct();
    }, 1000);

    return () => clearTimeout(interval);
  }, [value]);

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      {product.map((item, id) => (
        <p key={id}>{item.title}</p>
      ))}
    </div>
  );
}
