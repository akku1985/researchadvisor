import React from 'react'
import profile_image from '../asset/image/profile-img.jpg';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function _top_banner() {
    return (
        <div className="profile_banner">
            <div className="container ">
            <div className="row align-items-center g-0 ">
            <div className="col-xl-3 col-lg-6 col-md-12 ">
            <img className="profile_img_area" alt="" src={profile_image} />
            </div>
            <div className=" col-xl-8 col-lg-6 col-md-12">
                <h3>This is my Name </h3>
                <p>Organization Name Here</p>
                <React.Fragment>
                <ul>
                    <li><EditText  name="textbox1"   defaultValue="Research interest" />  </li> 
                    <li><EditText  name="textbox2"   defaultValue="Research interest" />  </li>
                    <li> <EditText  name="textbox3"   defaultValue="Research interest" /> </li>
                    <li> <EditText  name="textbox4"   defaultValue="Experience" /></li>
                </ul>
                </React.Fragment>
            </div>
            </div>
            </div>
        </div>
    )
}

export default _top_banner
