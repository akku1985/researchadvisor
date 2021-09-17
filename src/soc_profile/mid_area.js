import React from 'react'
import _profile_name from '../inc/_profile_name'
import _my_post from '../inc/_my_post'
import _text_post from '../inc/_text_post'
import _img_post from '../inc/_img_post'
import _video_post from '../inc/_video_post'

function _mid_area() {
    return (
        <div className="midwrap">
             <_profile_name/>
             <_my_post/>
             <_profile_name/>
             <_text_post/>
             <_profile_name/>
             <_img_post/>
             <_profile_name/>
             <_video_post/>

        </div>
    )
}

export default _mid_area
