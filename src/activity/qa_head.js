import React from 'react'
import profile_image from '../asset/image/profile-img.jpg';

function _qa_head() {
    return (
        <div className="qa" >
             <div className="profile_banner">
            <div className="container ">
            <div className="row align-items-center g-0 ">
            <div className="col-xl-3 col-lg-6 col-md-12 ">
            <img className="profile_img_area" alt="" src={profile_image} />
            </div>
            <div className=" col-xl-8 col-lg-6 col-md-12">
               <button>Ask a technical question</button>
               <button>Start a discussion</button>
                <p>Q&A Ask a technical question to get answers from experts, or start a scientific discussion with your peers.</p>
                
            </div>
            <div className="questions-block">
<button>Questions we think you can answer</button>
<button>Questions you follow</button>
<button>Questions you asked</button>

            </div>

            </div>
            </div>
        </div>
        </div>
    )
}

export default _qa_head
