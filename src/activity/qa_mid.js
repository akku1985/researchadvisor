import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

import _profile_name from '../inc/_profile_name'
import _qa_comment from './_qa_comment';

function _qa_mid() {
    return (
        <div className="qa-mid">
            <_profile_name/>
           <p> asked a question in OpenFOAM</p>
           <div className="qa-sec">
           <Link to="/"> <h4>How calculate fluid deformation and rotation using fluent ?</h4></Link>
            <span className="new" >New</span>
            <span className="question">Question</span>
            <span className="answers">2 answers</span>
            <p>Dear colleges,</p>
            <p>
I'm working a heat pipe simulation using the CFX code and I having some difficulty to model it. First of all, the device operates with 40% of volume fraction using water at a pressure of ~0.31bar (Saturation temperature ~​2​5​°​
</p>
            <span className="more">...more</span>
          <div className="qa-relat">
           <span >FLUENT</span>
           <span>Fluid</span>
           <span>Microchannels</span>
           <div className="col-sm-12">
           <Link className="l-side" to="/"> 23 Reads</Link>
           <Link className="r-side " to="/"> Answer</Link>           
           </div>
           <hr/>
          
          
           </div>         
          <hr/>
          <div className="row">
          <div class="col-sm-6 follow">
           <Avatar.Group
      maxCount={2}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    <Link className="follows"> follow or recommend </Link>       
           </div>

           <div class="col-sm-6">
               <_qa_comment/>
           </div>
           </div>

           </div>
        </div>
    )
}

export default _qa_mid
