
import products from "@/app/components/Produts"
import Link from 'next/link'

const AffiliateProducts = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Produtos Recomendados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className=" shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <Link href={`produtos/${product.id}`}>
                  <p className=" mb-4">{product.description}</p>
                </Link>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Ver na Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliateProducts;
