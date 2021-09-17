import React from 'react'
import logo_icon from '../asset/image/photo.svg';

function _my_post() {
    return (
        <div className="comment-section">
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            <button type="button" class="btn btn-dark">Publish</button>           
            <a><img className="logo" alt="" src={logo_icon} /> <span> Image/video </span> </a>            
        </div>
    )
}

export default _my_post
