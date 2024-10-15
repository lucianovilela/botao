
"use client"
import products from "@/app/components/Produts"
import Link from 'next/link'
import { useState } from "react";

const ProdutosRecomendados = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  // Calcula o índice do primeiro e do último item da página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Seleciona os produtos a serem exibidos na página atual
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Função para trocar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Produtos Recomendados
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
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
        {/* Controles de Paginação */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProdutosRecomendados;
