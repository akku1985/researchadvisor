import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import _articles_list from './articles_list';

const { TabPane } = Tabs;

function _overview() {
    return (
        <>
           <div className="col-sm-12 article-overview">
               <div className="head">Abstract and figures</div>
               <div className="copy">
               The building blocks of life, amino acids, are believed to have been synthesized in the 
               extreme conditions that prevail in space, starting from simple molecules containing 
               hydrogen, carbon, oxygen and nitrogen. However, the fate and role of amino acids when they are 
               subjected to similar processes largely remain unexplored. Here we report, for the first time, 
               that shock processed amino acids tend to form complex agglomerate structures. 
               Such structures are formed on timescales of about 2 ms due to impact induced shock heating 
               and subsequent cooling. This discovery suggests that the building blocks of life could 
               have self-assembled not just on Earth but on other planetary bodies as a result of impact events. 
               Our study also provides further experimental evidence for the ‘threads’ observed in 
               meteorites being due to assemblages of (bio)molecules arising from impact-induced shocks.
               </div>

               </div> 

               <div className="col-sm-12 article-tab">
               <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
          Tab 1
        </span>
      }
      key="1"
    >
      Tab 1
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>
               </div>

               <_articles_list/>
        </>
    )
}

export default _overview
