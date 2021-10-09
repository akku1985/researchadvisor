import React from 'react'
import _header from '../inc/_header';
import _footer from '../inc/_footer';
import _article_top_banner from './article_top_banner';
import _overview from './overview';

function _article_main() {
    return (
        <>
         <_header/>
                <div class="container article">
                        <div className="row">           
                            <div className="col-sm-12"><_article_top_banner/></div> 
                            <div className="col-sm-12">
                            <div className="col-sm-8">  <_overview/></div> 
                            <div className="col-sm-4"> </div>   
                                 </div>
                        </div>
                </div>
        <_footer/>
        </>
    )
}

export default _article_main
