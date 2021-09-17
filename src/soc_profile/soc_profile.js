import React from 'react';

import _left_panel from './left_panel';
import _right_panel from './right_panel';
import _mid_area from './mid_area';


function _soc_profile() {
    return (
        <>        
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
       
        </>
    )
}

export default  _soc_profile

