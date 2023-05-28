import { useState, Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom';

export const useImgViewer = (src: string, modalOff: Dispatch<SetStateAction<string>>) => {
  const modalRoot = document.getElementById('img-viewer-modal') as HTMLElement;

  const Modal = () => {
    const [position] = useState(window.scrollY);

    return createPortal(
      <div style={{ marginTop: position }} className="modal-container" onClick={() => modalOff("")}>
        <img src={src} style={{ width: "90vw"}}alt="testing things out, shutup errors" /> 
        <button type="button" className="modal-exit-btn" onClick={() => modalOff("")}>
          X CLOSE X
        </button>
      </div>,
      modalRoot
    );
  };

  return src ? <Modal /> : <></>
}
