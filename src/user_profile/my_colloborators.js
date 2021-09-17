import React from 'react'
import profile_img from '../asset/image/profile-img.jpg';

function _my_colloborators() {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12 colloborators">
        <h3>My colloborators</h3>
        <a  href className="profile">
                <div className="image">
                    <img alt="" src={profile_img} />
                    <span className="dactive"></span>
                </div>
                <div className="name">
                    <h4>Name</h4>
                    <p>mail@g.com</p>
                </div>
            </a>

            <a href className="profile">
                <div className="image">
                    <img alt="" src={profile_img} />
                    <span className="active"></span>
                </div>
                <div className="name">
                    <h4>Name</h4>
                    <p>mail@g.com</p>
                </div>
            </a>

            <a href className="profile">
                <div className="image">
                    <img alt="" src={profile_img} />
                    <span className="ideal"></span>
                </div>
                <div className="name">
                    <h4>Name</h4>
                    <p>mail@g.com</p>
                </div>
            </a>
      </div>
    )
}

export default _my_colloborators
