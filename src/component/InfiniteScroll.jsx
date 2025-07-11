import { useEffect, useState } from "react";
const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page,setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(null);

  const fetchProducts = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${page*10}`);
      const data = await res.json();

      setProducts([...products, ...data.products]);
      setPage(page+1);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.offsetHeight;

      if (scrollBottom + 100 >= scrollHeight && !loading && products.length < total) {
        fetchProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [products, loading, total]);

  return (
    <div>
      <h1>Infinite Scrolling (Simplified)</h1>
      <div className="products">
        {products.map((prod) => (
          <div className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <span>{prod.title}</span>
          </div>
        ))}
      </div>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
