import React , {useEffect} from 'react';
import './Modal.css';
import TabItem from '../TabComponent/TabItem';
import TabContent from '../TabComponent/TabContent';
import FileDrop from '../TabComponent/FileDrop/FileDrop';

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
            <TabContent defaultIndex="1" onTabClick={console.log}>
              <TabItem label="Upload by url" index="1">
                <form>
                  <div className='input'>
                    <input type="search" placeholder="Enter your URL here" className="searchbox" />
                    <button className="button-main">            
                        <i className="fas fa-search search-icon"></i>
                    Search
                    </button>
                  </div>
                </form>
              </TabItem>
              <TabItem label="Drag and Drop" index="2">
                <FileDrop onDrop={console.log}/>
              </TabItem>
              <TabItem label="Brower image" index="3">
                <form>
                  <div className='input'>
                    <input type="file" placeholder="Enter your URL here" className="search-file" />
                    <button className="button-main">            
                        <i className="fas fa-search search-icon"></i>
                    Search
                    </button>
                  </div>
                </form>
              </TabItem>
            </TabContent>
          </div>
      </div>
    )
}
      

export default Modal
