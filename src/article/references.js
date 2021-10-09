import React from "react";
import ReactDOM from "react-dom";
import { Menu, Dropdown, Button } from "antd";
import book_img from "../asset/image/book.jpg";
import profile_image from "../asset/image/profile-img.jpg";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

function _references() {
  return (
    <div className="col-sm-12 references">
      <div className="col-sm-12">
        <div className="col-sm-8">
          <div className="head">Abstract and figures</div>
        </div>
        <div className="col-sm-4">
          Sorted by:
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Button>bottomLeft</Button>
          </Dropdown>
        </div>

        <div className="col-sm-12">
          <img className="profile_img_area" alt="" src={book_img} />
          <img className="profile_img_area" alt="" src={book_img} />
          <img className="profile_img_area" alt="" src={book_img} />
        </div>
        <div className="col-sm-12">
          <h3>
            Co-existence of wind seas and swells along the west coast of India
            during non-monsoon season
          </h3>
          <span>Article</span>
          <p>Jul 2021</p> <Link to="/"> THEOR APPL CLIMATOL </Link>
          <ul>
            <li>
              <img className="profile_img_area" alt="" src={profile_image} />
              Surendra Vikram
            </li>
            <li>
              <img className="profile_img_area" alt="" src={profile_image} />
              Jayaram Vishakantaiah
            </li>
            <li>
              <img className="profile_img_area" alt="" src={profile_image} />
              Jaya Krishna Meka
            </li>
            <li>
              <img className="profile_img_area" alt="" src={profile_image} />
              Bhalamurugan Sivaraman
            </li>
          </ul>
          <p>
            An attempt has been made to understand the co-existence of wind seas
            and swells along the west coast of In-dia during non-monsoon season.
            Wave data were collected in different years during non-monsoon
            season (off Goa during May 2005,…
          </p>
          <Link to="/"> Read more</Link>
          <Link to="/"> 213 Reads </Link>
          <Link to="/"> 14 Citations</Link>
        </div>
        <div className="col-sm-6">
          <button>Download</button>
        </div>
        <div className="col-sm-6">
          <div className="likesection">
            <div className="like">
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
              <span>Recommend</span>
            </div>

            <div className="share">
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
              <span>share</span>
            </div>
            <div className="comment">
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
              <span>Follow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _references;
