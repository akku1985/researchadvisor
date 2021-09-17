import {Component} from 'react'
import profile_img from '../asset/image/profile-img.jpg';

class _left_panel extends Component{
    render()    {
    return(
        <div className="left_panel">
            <h2>Network</h2>
        <div className="left_panel_following">
            <h3>Following</h3>
            <input type="text" id="fname" name="fname"/>
            <a className="profile">
                <div className="image">
                    <img alt="" src={profile_img} />
                    <span className="ideal"></span>
                </div>
                <div className="name">
                    <h4>Name</h4>
                    <p>mail@g.com</p>
                </div>
            </a>
            <a className="profile">
                <div className="image">
                    <img alt="" src={profile_img} />
                    <span className="dactive"></span>
                </div>
                <div className="name">
                    <h4>Name</h4>
                    <p>mail@g.com</p>
                </div>
            </a>
        </div>

         <div className="left_panel_follower">
            <h3>test</h3>
            <input type="text" id="fname" name="fname"/>
            <a className="profile">
                <div className="image">
                <img alt="" src={profile_img} />
                    <span className="active"></span>
                </div>
                <div className="name">
                    <h4>Name</h4>
                    <p>mail@g.com</p>
                </div>
            </a>
        </div>

        </div>
        )
    }
  }
  export default _left_panel