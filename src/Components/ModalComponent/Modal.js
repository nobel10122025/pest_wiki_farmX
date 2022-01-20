import React , {useEffect} from 'react';
import './Modal.css';
import '../TabComponent/TabContent.css'
import 'react-tabs/style/react-tabs.css';
import TabContent from '../TabComponent/TabContent';



function Modal({isVisible=false , handleClose}) {

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        handleClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });
    
    return !isVisible ? null :
       (
        <div className="modal">
        <div className="modal-container">
            <i className="fas fa-times-circle close-btn" onClick={handleClose}></i>
            <h2>Upload a image by ...</h2>
            <div className="underline"></div>
               <TabContent />
          </div>
      </div>
    )
}
      

export default Modal
