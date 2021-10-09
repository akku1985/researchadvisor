import React from 'react'


import _header from '../inc/_header';
import _footer from '../inc/_footer';
import _qa_head from './qa_head';
import _qa_left from './qa_left';
import _qa_right from './qa_right';
import _qa_mid from './qa_mid';

function question_and_discussion() {
    return (
        <>
              <_header/>
              <_qa_head/>
              <div class="container">
              <div class="row">
                <div className="col-sm-3">
               <_qa_left/>
                </div>
              
                <div className="col-sm-6 qa-mid-wrap">
               <_qa_mid/>
               <_qa_mid/>
               <_qa_mid/>
                </div>
    
                <div className="col-sm-3">
               <_qa_right/>
                </div>
          </div>
        </div>
              <_footer/>
            
        </>
    )
}

export default question_and_discussion
