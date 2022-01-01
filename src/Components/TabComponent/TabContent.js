import React ,{useState} from 'react'
import './TabContent.css'
function TabContent({ defaultIndex = 0, onTabClick, children }) {

    const [bindIndex , setBindIndex] = useState(defaultIndex)

    const changeTab = newIndex => {
        if (typeof onTabClick === 'function') onTabClick(newIndex);
        setBindIndex(newIndex);
      };
    
     const items = children.filter(item => item.type.name === "TabItem");


    return (
    <>
        <div className="options-container">
        {items.map(({ props: { index, label } }) => (
          <span
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? 'active' : ''}
          >
            {label}
          </span>
        ))}
        </div>
      <div >
        {items.map(({ props }) => (
          <div
            {...props}
            className={`input-container ${
              bindIndex === props.index ? 'active' : ''
            }`}
            key={`tab-content-${props.index}`}
          />
        ))}
        </div>
    </>
    )
}

export default TabContent
