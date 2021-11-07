import React from "react";
import profile_image from "../asset/image/book.jpg";
import { Link } from "react-router-dom";
import _like_comment from "../inc/_like_comment";

function _articles_list() {
  return (
    <div className="col-sm-12 article-list">
      <div className="head"> Similar research</div>
      <div className="copy">
        <div>
          <img className="profile_img_area" alt="" src={profile_image} />
          <img className="profile_img_area" alt="" src={profile_image} />
          <img className="profile_img_area" alt="" src={profile_image} />
        </div>
        <h3>
          Effects of Glycine, Water, Ammonia, and Ammonium Bicarbonate on the
          Oligomerization of Methionine
        </h3>
        <div>
          <Link to="" className="article">
            Article
          </Link>
          <Link to="" className="links">
            {" "}
            Full-text available
          </Link>
        </div>
        <span>June 2017Origins of Life and Evolution of Biospheres</span>

        <ul className="profile-list p-0 list-group-horizontal">
          <li class="list-group-item p-1 ">
            {" "}
            <img className="profile_img" alt="" src={profile_image} /> Takeshi
            Kakegawa
          </li>
          <li class="list-group-item p-1 ">
            {" "}
            <img className="profile_img" alt="" src={profile_image} /> Takeshi
            Kakegawa
          </li>
          <li class="list-group-item p-1 ">
            {" "}
            <img className="profile_img" alt="" src={profile_image} /> Takeshi
            Kakegawa
          </li>
        </ul>

        <p>
          The abiotic oligomerization of amino acids may have created
          primordial, protein-like biological catalysts on the early Earth.
          Previous studies have proposed and evaluated the potential of
          diagenesis for the amino acid oligomerization, simulating the
        </p>

        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">
            {" "}
            <Link to="" className="article">
              431 Reads
            </Link>
          </li>
          <li class="list-group-item">
            <Link to="" className="article">
              41 Citations
            </Link>
          </li>
        </ul>

        <hr />
        <div className="row">
          <div className="col-sm-6">
            <button class="btn btn-outline-info">Download</button>
          </div>
          <div className="col-sm-6">
            <ul className="likesection pagination justify-content-end">
              <li className="like page-item p-2 border  m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
                <span className="p-2">Recommend</span>
              </li>

              <li className="share page-item p-2 border  m-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-right-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                  />
                </svg>
                <span className="p-2">share</span>
              </li>
              <li className="comment page-item p-2 border m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                  />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
                <span className="p-2">Follow</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _articles_list;
