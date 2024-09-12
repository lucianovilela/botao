import React from 'react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        {/* Título da Dialog */}
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>

        {/* Conteúdo da Dialog */}
        <div className="mb-6">
          {children}
        </div>

        {/* Botões de controle */}
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
