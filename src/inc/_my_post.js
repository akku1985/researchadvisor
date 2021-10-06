import React from 'react';
import { Link } from 'react-router-dom';
import logo_icon from '../asset/image/photo.svg';
function _my_post() {
    return (
        <div className="comment-section">
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            <button type="button" class="btn btn-dark">Publish</button>           
            <Link to="/"><img className="logo" alt="" src={logo_icon} /> <span> Image/video </span> </Link>           
        </div>
    )
}

export default _my_post
