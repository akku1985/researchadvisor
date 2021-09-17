import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function _my_publications() {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12 publications">
        <h3>My publications</h3>
        <Tabs type="card">
      <TabPane tab="All" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Journals" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Conference" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>

      <TabPane tab="Posters" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>

      <TabPane tab="Pre Preparation" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>

    </Tabs>
      </div>
    )
}

export default _my_publications
