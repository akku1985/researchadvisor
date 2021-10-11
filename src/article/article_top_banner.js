import React from "react";
import ReactDOM from "react-dom";

import profile_image from "../asset/image/profile-img.jpg";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "antd";
import menu from "../asset/image/dots-menu.svg";

const text = <span>prompt text</span>;

function _article_top_banner() {
  return (
    <div className="row  top">
      <div class="col-sm-8">
        <span className="">Article </span>
        <button className="">Full-text available</button>
        <h3>
          Shock Processing of Amino Acids Leading to Complex
          Structures-Implications to the Origin of Life
        </h3>
        <ul className="info">
          <li> <p>December 2020</p> </li>
          <li> <p>Molecules 25(23)</p> </li>
          <li><p>DOI: <Link to=""> 10.3390/molecules25235634 Home </Link></p> </li>
        <li><p> License<Link to=""> CC BY 4.0</Link>        </p> </li>
           <li> <p> Labs: <Link to=""> Jayaram Vishakantaiah's Lab</Link>
          <Link to=""> Hugh Hill's Lab</Link>
        </p> </li>
        </ul>
        <ul className="profile-list">
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
        <ul className="banner-right">
          <li>
          <Link to="" className="article-link">
            <p> Research Interest </p>
            <img alt="" src={menu} />            
            <Tooltip placement="top" title={text}>
              <Button>Top</Button>
            </Tooltip>
            </Link>
            <Link to="" className="article-link">
            <img alt="" src={menu} />
             <p>8.2</p>
             </Link>
          </li>
          <li>
          <Link to="" className="article-link">
            <p>Citations</p>
            <img className="profile_img_area" alt="" src={profile_image} />
            </Link>
            <Link to="" className="article-link">
            <span>2</span>
            </Link>
          </li>
          <li>
          <Link to="" className="article-link">
           <p>Recommendations</p>
            <img className="profile_img_area" alt="" src={profile_image} />
            </Link>
            <Link to="" className="article-link">
           <span>0 new</span>
           <p>1</p>
           </Link>
          </li>
          <li>
          <Link to="" className="article-link">
          <p>Reads</p>
          <Tooltip placement="top" title={text}>
              <Button>Top</Button>
            </Tooltip>
            </Link>
            <Link to="" className="article-link">
           <span>0 new</span>
           <p>1</p>
           </Link>
          </li>
        </ul>
        <button className="more-bu">See details</button>
      </div>


      <div class="col-sm-12">
<ul className="article-top-link">
<li><Link to="" className="link">Overview </Link></li>
<li><Link to="" className="link">Stats </Link></li>
<li><Link to="" className="link">Comments </Link></li>
<li><Link to="" className="link">Citations<span>5</span> </Link></li>
<li><Link to="" className="link">Download </Link></li>
<li><Link to="" className="link">Share </Link></li>
<li><Link to="" className="link">More </Link></li>
</ul>

      </div>
    </div>
  );
}

export default _article_top_banner;
