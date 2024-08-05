const AddQuestionModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">Frage hinzufügen</h2>
            <label htmlFor="question text-left">Frage</label>
            <input
              type="text"
              placeholder="Frage"
              className="border border-gray-300 p-2 mb-2 w-full"
            />
            <div className="flex items-center justify-center gap-2">
              <button
                className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md"
                onClick={onClose}
              >
                Schließen
              </button>
              <button
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md"
                onClick={onClose}
              >
                Fertig
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddQuestionModal;
