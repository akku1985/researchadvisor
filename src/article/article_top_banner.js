import React from "react";
import ReactDOM from "react-dom";

import profile_image from "../asset/image/profile-img.jpg";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "antd";
import menu from "../asset/image/dots-menu.svg";

const text = <span>prompt text</span>;

function _article_top_banner() {
  return (
    <div className="row">
      <div class="col-sm-8">
        <span className="">Article </span>
        <button className="">Full-text available</button>
        <h3>
          Shock Processing of Amino Acids Leading to Complex
          Structures-Implications to the Origin of Life
        </h3>
        <p>December 2020</p>
        <p>Molecules 25(23)</p>
        <p>
          DOI: <Link to=""> 10.3390/molecules25235634 Home </Link>
        </p>
        <p>
          License<Link to=""> CC BY 4.0</Link>
        </p>
        <p>
          Labs: <Link to=""> Jayaram Vishakantaiah's Lab</Link>
          <Link to=""> Hugh Hill's Lab</Link>
        </p>
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
        <button>Show all 17 authors</button>
      </div>

      <div class="col-sm-4">
        <ul>
          <li>
           
            <p> Research Interest </p>
            <Tooltip placement="top" title={text}>
              <Button>Top</Button>
            </Tooltip>
            <img alt="" src={menu} /> <p>8.2</p>
          </li>
          <li>
            <p>Citations</p>
            <img className="profile_img_area" alt="" src={profile_image} />
            <span>2</span>
          </li>
          <li>
           <p>Recommendations</p>
            <img className="profile_img_area" alt="" src={profile_image} />
           <span>0 new</span>
           <p>1</p>
          </li>
          <li>
          <p>Recommendations</p>
          <Tooltip placement="top" title={text}>
              <Button>Top</Button>
            </Tooltip>
           <span>0 new</span>
           <p>1</p>
          </li>
        </ul>
        <button>See details</button>
      </div>


      <div class="col-sm-12">
<ul>
<li>Overview</li>
<li>Stats</li>
<li>Comments</li>
<li>Citations<span>5</span></li>
<li>Download</li>
<li>Share</li>
<li>More</li>
</ul>

      </div>
    </div>
  );
}

export default _article_top_banner;
