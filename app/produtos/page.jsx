

const products = [
  {
    id: 1,
    name: "Echo Dot (4ª Geração)",
    description: "Smart speaker com Alexa - Controle sua casa inteligente com sua voz.",
    image: "https://m.media-amazon.com/images/I/61u48FEs3rL._AC_SL1000_.jpg",
    affiliateLink: "https://www.amazon.com.br/dp/B07X1TSPH6?tag=suaidafiliado"
  },
  {
    id: 2,
    name: "Kindle Paperwhite",
    description: "Leitor de e-books à prova d'água com tela de 6.8 polegadas e luz ajustável.",
    image: "https://m.media-amazon.com/images/I/51w-HRH-aAL._AC_SL1000_.jpg",
    affiliateLink: "https://www.amazon.com.br/dp/B08B4931JJ?tag=suaidafiliado"
  },
  {
    id: 3,
    name: "Cafeteira Expresso Nespresso Essenza Mini",
    description: "Cafeteira compacta para cafés expressos de qualidade profissional.",
    image: "https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg",
    affiliateLink: "https://www.amazon.com.br/dp/B07ZQ4RDS7?tag=suaidafiliado"
  }
];

const AffiliateProducts = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Produtos Recomendados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
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
