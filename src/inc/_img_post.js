import React from 'react'
import _like_comment from './_like_comment'
import img_post_1 from '../asset/image/1.png';
import img_post_2 from '../asset/image/2.png';
import img_post_3 from '../asset/image/3.jpg';

function _img_post() {
    return (
        <div class="image-post">
        <div className="row nomargin">        
        <div class="col-xl-8 col-xxl-7 nopad">  <img alt="" src={img_post_3} /></div>
        <div className="col-xl-4 col-xxl-5 d-flex nopad">
        <div class="col-sm-12  nopad">
        <div class="card"> <img alt="" src={img_post_2} /></div>
        <div class="card"> <img alt="" src={img_post_1} /></div>    
        </div>  
        </div>   
           
       </div>
       <_like_comment/>
       </div>
    )
}

export default _img_post

