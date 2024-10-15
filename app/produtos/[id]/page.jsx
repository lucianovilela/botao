import products from "@/app/components/Produts"

export async function generateStaticParams() {


    return products.map((product) => ({
        id: product.id + '',
    }))
}

const Page = ({ params }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Produto Recomendado
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                        return product.id === params.id ? (
                            <div
                                key={product.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                            >
                                <img
                                    className="w-full h-56 object-cover"
                                    src={product.image}
                                    alt={product.name}
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                                        {product.name}
                                    </h2>
                                    <p className="mb-4 text-gray-700 line-clamp-3">
                                        {product.description}
                                    </p>
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
                        ) : null;
                    })}
                </div>
            </div>
        </div>

    );
};

export default Page;