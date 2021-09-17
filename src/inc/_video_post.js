import React from 'react'
import _like_comment from './_like_comment'

function _video_post() {
    return (
        <div className="video-post">
                        <video controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"/>
            <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg"/>  
            </video>
            <_like_comment/>
        </div>
    )
}

export default _video_post
