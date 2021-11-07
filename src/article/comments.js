import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import profile_img from "../asset/image/profile-img.jpg";
import { Link } from "react-router-dom";


import _header from '../inc/_header';
import _footer from '../inc/_footer';
import _article_top_banner from './article_top_banner';


function _comments() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return (
    <>
    <_header/>
    <div class="container article ">         
                          <div className="col-sm-12 m-0 p-0"><_article_top_banner/></div> 
    <div className="comments">
      <div className="col-sm-8 article-comments card p-0 mt-3 mb-3 ">
      <div className="card-body ">
        <div className="col-sm-12 ">
          <h6>Comments (0)</h6>
        </div>
        <hr/>
        <div className="col-sm-12 ">
        <img className="mr-3  rounded-circle" alt="" src={profile_img} />
          <Link className="container-fluid" to="/">Agnimitra Sunkara</Link>
          <span>added a comment</span>
          <div className="col-sm-12 ">
            <p>Hi. I read your work and its very good. I have a query, the probe is 3D printed and therefore the surface finish looks poor. Does the surface finish inside the tube cavity matter in the pressure measurements?</p>
          <ul className="likesection pagination justify-content-end">
            <li className="page-item p-2 border text-primary  m-1">Recommend</li>
            <li className="page-item p-2 border text-primary  m-1">Reply</li>
            <li className="page-item p-2 border text-primary  m-1">Share</li>
          </ul>
          </div>
        </div>
        <hr/>
        <div className="col-sm-12 ">
        <img className="mr-3  rounded-circle" alt="" src={profile_img} />
          <Link to="/"> Kiran Joy Irimpan </Link>
        </div>
        <hr/>
        <div className="col-sm-12 ">  
          
          <div
            style={{
              border: "1px solid black",
              padding: "2px",
              minHeight: "200px",
            }}
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />

          </div>

          <button className="btn btn-info mt-3 ">Add comment</button>
        </div>
        </div>
      </div>
    </div>
    </div>
    <_footer/>
            </>
  );
}

export default _comments;
