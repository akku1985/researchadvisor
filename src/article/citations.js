import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import profile_image from "../asset/image/profile-img.jpg";


function _citations() {
    return (
        <div className="col-sm-12 citations">
             <div className="head">Abstract and figures</div>
               <div className="copy">
               The building blocks of life, amino acids, are believed to have been synthesized in the extreme conditions that prevail in space, starting from simple molecules containing hydrogen, carbon, oxygen and nitrogen. However, the fate and role of amino acids when they are subjected to similar processes largely remain unexplored. Here we report, for the first time, that shock processed amino acids tend to form complex agglomerate structures. Such structures are formed on timescales of about 2 ms due to impact induced shock heating and subsequent cooling. This discovery suggests that the building blocks of life could have self-assembled not just on Earth but on other planetary bodies as a result of impact events. Our study also provides further experimental evidence for the ‘threads’ observed in meteorites being due to assemblages of (bio)molecules arising from impact-induced shocks.
              <hr/>
              <p>Reference: Recent Studies on Wind Seas and Swells in the Indian Ocean: A Review</p>
               </div>
               <div className="copy">
                   <h3>CMIP5 model performance of significant wave heights over the Indian Ocean using COWCLIP datasets</h3>
              
              <span>Article</span>
              
<p>Jul 2021</p>  <Link to="/"> THEOR APPL CLIMATOL </Link> 
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
        <Link to="/"> View </Link> 
        <Link to="/"> Request full-text</Link> 
               </div>

        </div>
    )
}

export default _citations
