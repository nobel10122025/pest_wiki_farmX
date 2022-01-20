import React, { Component } from 'react';
import '../TabComponent/TabContent.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FileDrop from '../TabComponent/FileDrop/FileDrop';
import 'react-tabs/style/react-tabs.css';

const CustomTab = ({ children ,selectedIndex}) => (
    <Tab>
      <div className='options-container'>
        <span className={`${selectedIndex === 'true' ? 'active':''}`}>
        {children}
        </span>
      </div>
    </Tab>
  );
  
  CustomTab.tabsRole = 'Tab';

class TabContent extends Component {

    constructor(){
        super();
        this.state = { tabIndex: 0 };
    }

  render() {
    return (
    <>
        <Tabs 
            selectedIndex={this.state.tabIndex} 
            onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <CustomTab selectedIndex={`${this.state.tabIndex===0 ? 'true' : 'false'}`}>
                Upload by URL
            </CustomTab>
            <CustomTab selectedIndex={`${this.state.tabIndex===1 ?'true' : 'false'}`}>
                Drag and Drop
            </CustomTab>
            <CustomTab selectedIndex={`${this.state.tabIndex===2 ?'true' : 'false'}`}>
                Brower image
            </CustomTab>
          </TabList>
          <TabPanel>
          <form>
            <div className='input'>
              <input type="search" placeholder="Enter your URL here" className="searchbox" />
              <button className="button-main">            
                  <i className="fas fa-search search-icon"></i>
              Search
              </button>
            </div>
          </form>
          </TabPanel>
          <TabPanel>
            <div className='input'>
              <FileDrop onDrop={console.log}/>
            </div>
          </TabPanel>
          <TabPanel>
            <form>
              <div className='input'>
                <input type="file" placeholder="Enter your URL here" className="search-file" />
                <button className="button-main">            
                    <i className="fas fa-search search-icon"></i>
                Search
                </button>
              </div>
            </form>
          </TabPanel>
          </Tabs>
    </>
    )
  }
}

export default TabContent;
