import React from 'react';

import _left_panel from './left_panel';
import _right_panel from './right_panel';
import _mid_area from './mid_area';
import _header from '../inc/_header';
import _footer from '../inc/_footer';


function _soc_profile() {
    return (
        <>  
        <_header/>      
        <div class="container">
           <div class="row">
                <div className="col-sm-3">
                <_left_panel/>
                </div>
              
                <div className="col-sm-6">
                <_mid_area/>
                </div>
    
                <div className="col-sm-3">
                <_right_panel/>
                </div>
          </div>
        </div>
        <_footer/>
        </>
    )
}

export default  _soc_profile

