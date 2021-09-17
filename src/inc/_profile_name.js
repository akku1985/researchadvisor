import React from 'react'
import logo from '../asset/image/profile-img.jpg';

function _profile_name() {
    return (
        <div className="profile">
            <div className="profile-pic">
            <img className="logo" alt="" src={logo} />
            </div>
            <div className="profile-name">
            <h4>Name</h4>
            <p>Seeptember 12 at 9:59 AM  </p>
            </div>
             

        </div>
    )
}

export default _profile_name
