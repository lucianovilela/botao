import React from 'react';
import Link from 'next/link';

const DialogBox = ({ isOpen, onClose, title, children, autoCloseTime = 5000 }) => {
  React.useEffect(() => {
    // Se o dialog estiver aberto, iniciar o timer
    if (isOpen) {
      const timer = setTimeout(() => {
         onClose();  // Fechar o Dialog automaticamente após o tempo definido
      }, autoCloseTime);

      // Limpar o timer se o dialog for fechado manualmente antes do tempo
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, autoCloseTime]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Título da Dialog */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>

        {/* Conteúdo da Dialog */}
        <div className="mb-6 text-gray-900 dark:text-gray-200">
          {children}
        </div>
        {/* Botões de controle */}
        <div  className="flex justify-center ">

          <div className="flex justify-start  space-x-4 mr-3">
            <Link
              className="px-4 py-2 bg-green-300 dark:bg-green-700 text-green-700 dark:text-green-200 rounded-md hover:bg-green-400 dark:hover:bg-green-600"
              href={"/produtos"}
            >
              Produtos
            </Link>
          </div>
          {/* Botões de controle */}
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DialogBox;
