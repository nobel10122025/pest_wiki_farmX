import React, {useState} from 'react'
import './PestWiki.css'
import Modal from '../ModalComponent/Modal'
import AutoComplete from '../AutoComplete/AutoComplete';
let searchable = [
    'Elastic',
    'PHP',
    'Something about CSS',
    'How to code',
    'JavaScript',
    'Coding',
    'Some other item',
  ];
function PestWiki() {

    const [isModal, setModal] = useState(false);
    const [data , setData] = useState(searchable)
    const [pestList , setPestList] =useState([]);

    const handleChange = (e) => {
        const result = e.target.value;
        if(result===''){
            setPestList([])
            return
        }
        const autocomplete = data.filter(
            (item)=>item.toLowerCase().includes(result.toLowerCase()));
        setPestList(autocomplete);
    }
    return (
        <>
        <div className="Container">
            <div className="title-container">
                <h1 className="title">Pest Wiki
                    <i className="fas fa-bug"></i>
                </h1>
            </div>
            <form>
                <div className='input'>
                    <input 
                        type="search" 
                        placeholder="Start your search here" 
                        className="searchbox" 
                        onChange={(e)=>handleChange(e)}
                        ></input>
                    <i className="fas fa-camera search-img" onClick={()=>setModal(true)}></i>
                    <button className="button-main">            
                        <i className="fas fa-search search-icon"></i>
                        Search
                    </button>
                </div>
                <AutoComplete pestList={pestList}/>
            </form>
        </div>

        <Modal 
            isVisible = {isModal} 
            handleClose={() => setModal(false)}
            />
        </>
    )
}

export default PestWiki
