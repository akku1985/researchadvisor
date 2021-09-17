import React from 'react'


import _top_banner from "./top_banner";
import _citation  from "./citation";
import _partners from "./partners";
import _stats from "./stats";
import _my_scholars from "./my_scholars";
import _my_publications from "./my_publications";
import _my_colloborators from "./my_colloborators"; 

function _user_profile() {
  return (
    <>
     
      <_top_banner />
      <div class="profile_mid">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 col-lg-12 col-md-12 profile_left">
              <div class="row">
                <_citation/>
                <_partners />
                <_my_scholars />
                <_my_publications />
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-12  profile_right">
              <_stats />
              <_my_colloborators/>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default _user_profile;
