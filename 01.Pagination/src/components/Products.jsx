const Products = ({ data }) => {
  let content;
  if (data.length === 0) {
    content = <p className="text-red-500">No products found!</p>;
  } else {
    content = data.map((product) => (
      <div key={product.id} className="bg-gray-200 p-4 rounded-md">
        <h3 className="font-semibold">{product.name}</h3>
      </div>
    ));
  }
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      {content}
    </section>
  );
};

export default Products;
