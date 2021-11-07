import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { Select } from 'antd';
import { Line } from '@ant-design/charts';
import { Checkbox, Row, Col } from 'antd';
import _header from '../inc/_header';
import _footer from '../inc/_footer';
import _article_top_banner from './article_top_banner';

import profile_image from "../asset/image/profile-img.jpg";

const { Option } = Select;


/////////////////
function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }


///////////chart//////////
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
  
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond',
      },
      label: {
        style: {
          fill: '#aaa',
        },
      },
    };

////////////////////

function _stats() {
//////////Radio////////////


    return (
      <>
      <_header/>
      <div class="container article ">         
                            <div className="col-sm-12 m-0 p-0"><_article_top_banner/></div> 
        <div className="article-stats m-3">
        <div class="card mt-3">
            <div className="col-sm-12 article-stats-overview card-body">
             
            <h4 className="card-title">Stats overview</h4>
            <hr/>
            <ul className="list-group list-group-horizontal">

                <li className="list-group-item">
                    <div className="block">
                        <h5>0.6</h5>
                        <p>Research Interest</p>
                        <Link to="" className="links"> More details</Link>
                    </div>
                    <div className="block-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z" />
                        </svg>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="block">
                        <h5>0.6</h5>
                        <p>Research Interest</p>
                        <Link to="" className="links"> More details</Link>
                    </div>
                    <div className="block-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z" />
                        </svg>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="block">
                        <h5>0.6</h5>
                        <p>Research Interest</p>
                        <Link to="" className="links"> More details</Link>
                    </div>
                    <div className="block-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z" />
                        </svg>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="block">
                        <h5>0.6</h5>
                        <p>Research Interest</p>
                        <Link to="" className="links"> More details</Link>
                    </div>
                    <div className="block-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z" />
                        </svg>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="block">
                        <h5>0.6</h5>
                        <p>Research Interest</p>
                        <Link to="" className="links"> More details</Link>
                    </div>
                    <div className="block-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5z" />
                        </svg>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <div class="card mt-3">
        <div className="col-sm-12 article-stats-history card-body">
        <div className="col-sm-8 p-0"> <h4>Researchers who recommended this work</h4></div>
        <hr/>
     
              <div className="row">
              <div className="col-sm-4 p-0">
           <div className="media border p-3 m-3">
                         <img src={profile_image} alt="John Doe" className="mr-3  rounded-circle"/>
                          <div className="media-body">
                            <h6>John Doe <small><i>Posted on February 19, 2016</i></small></h6>
                            <p>Lorem ipsum...</p>
                            <span>John Doe </span>
                            <p>Lorem ipsum...</p>
                            <span>John Doe </span>
                            <p>Lorem ipsum...</p>
                          </div>
              </div>
              </div>

              <div className="col-sm-4 p-0">
           <div className="media border p-3 m-3">
                         <img src={profile_image} alt="John Doe" className="mr-3  rounded-circle"/>
                          <div className="media-body">
                            <h6>John Doe <small><i>Posted on February 19, 2016</i></small></h6>
                            <p>Lorem ipsum...</p>
                            <span>John Doe </span>
                            <p>Lorem ipsum...</p>
                            <span>John Doe </span>
                            <p>Lorem ipsum...</p>
                          </div>
              </div>
              </div>
              <div className="col-sm-4 p-0">
           <div className="media border p-3 m-3">
                         <img src={profile_image} alt="John Doe" className="mr-3 rounded-circle"/>
                          <div className="media-body">
                            <h6>John Doe <small><i>Posted on February 19, 2016</i></small></h6>
                            <p>Lorem ipsum...</p>
                            <span>John Doe </span>
                            <p>Lorem ipsum...</p>
                            <span>John Doe </span>
                            <p>Lorem ipsum...</p>
                          </div>
              </div>
              </div>
              </div>
        </div>
        </div>

        <div class="card mt-3">
        <div className="col-sm-12 article-stats-history card-body">
<div className="row">
        <div className="col-sm-8 "> <h4>Stats history</h4></div>
          
            <div className="col-sm-4 "> <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select></div>
  </div>
  <hr/>


  <div className="col-sm-12 "> 
  
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>


  <Line {...config} />
  </div>
            </div>

            </div>   
            </div>    
            </div>
            <_footer/>
            </>
    )
}

export default _stats
