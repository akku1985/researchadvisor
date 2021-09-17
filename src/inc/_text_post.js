import React from 'react'
import PropTypes from 'prop-types'
import _like_comment from './_like_comment'

function _text_post(props) {
    return (
        <div className="text-post">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <span className="r-more"> See More</span>         
            <_like_comment/>
        </div>
    )
}

_text_post.propTypes = {

}

export default _text_post

