import React, { useState } from "react";

const ModalBackground = ({ onClick, children }) => (
  <div
    onClick={onClick}
    className="fixed z-10 inset-0 w-full h-full overflow-auto bg-transparent/50"
  >
    {children}
  </div>
);

const ModalBody = ({ onClick, children }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg shadow-xl p-8 w-1/2 max-w-2xl"
  >
    {children}
  </div>
);

const MyModal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShouldShow(true)}
        className="btn btn-primary my-8"
      >
        Show Modal
      </button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShouldShow(false)}
              className="btn btn-primary"
            >
              Hide Modal
            </button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default MyModal;
