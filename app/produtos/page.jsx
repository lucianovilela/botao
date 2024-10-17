

import products from "@/app/components/Produts"
import Link from 'next/link'


const ProdutosRecomendados = () => {


  return (
    
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Produtos Recomendados
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                  />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  {product.name}
                </h2>
                <Link href={`produtos/${product.id}`}>
                  <p className="mb-4 text-gray-700 line-clamp-3">
                    {product.description}
                  </p>
                </Link>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200"
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

export default ProdutosRecomendados;
