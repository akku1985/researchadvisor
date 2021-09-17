import {Component} from 'react'
import book_img from '../asset/image/book.jpg';
import bookmark from '../asset/image/bookmark-fill.svg';

function toggleClass() {
    document.querySelector('.bookmark').classList.toggle('bookmark-active');
  }



class _right_panel extends Component{
    state = { isActive: false };
    handleToggle = () => {
      this.setState({ isActive: !this.state.isActive });
    };

    
    render()    {
        const isActive = this.state.isActive;
    return(
        <div className="right_panel">
            <h2>popular books</h2>
   
            <a className="item">
                <div className="image">
                    <img alt="" src={book_img} />
                </div>
                <div className="name">
                    <h4>Book Name</h4>
                    <p>book writer</p>
                </div>
                <span  className={isActive ? "bookmark-active" : "bookmark"} onClick={this.handleToggle} > <img alt="" src={bookmark} /></span>
            </a>
            <a className="item">
                <div className="image">
                    <img alt="" src={book_img} />
                </div>
                <div className="name">
                    <h4>Book Name</h4>
                    <p>book writer</p>
                </div>
                <span  className={isActive ? "bookmark-active" : "bookmark"} onClick={this.handleToggle} > <img alt="" src={bookmark} /></span>
            </a>
            <a className="item">
                <div className="image">
                    <img alt="" src={book_img} />
                </div>
                <div className="name">
                    <h4>Book Name</h4>
                    <p>book writer</p>
                </div>
                <span  className={isActive ? "bookmark-active" : "bookmark"} onClick={this.handleToggle} > <img alt="" src={bookmark} /></span>
            </a>
            

        </div>
        )
    }
  }
  export default _right_panel