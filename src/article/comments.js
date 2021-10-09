import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import profile_img from "../asset/image/profile-img.jpg";
import { Link } from "react-router-dom";

function _comments() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return (
    <div className="comments">
      <div className="col-sm-8 article-comments">
        <div className="col-sm-12 ">
          <h2>Stats history</h2>
        </div>
        <div className="col-sm-12 ">
          <img className="profile_img_area" alt="" src={profile_img} />
          <Link to="/"> Kiran Joy Irimpan </Link>
        </div>
        <div className="col-sm-12 ">
          <h1>React Editors</h1>
          <h2>Start editing to see some magic happen!</h2>
          <div
            style={{
              border: "1px solid black",
              padding: "2px",
              minHeight: "400px",
            }}
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />

          </div>

          <button>Add comment</button>
        </div>
      </div>
    </div>
  );
}

export default _comments;
