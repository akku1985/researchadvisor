import { Component } from "react";
import fb from "../asset/image/facebook.svg";
import twit from "../asset/image/twit.svg";
import link from "../asset/image/linkedin.svg";

class _footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-link">
          <ul>
            <li>
              <a href="/#">  Home </a>
            </li>
            <li>
              <a href="/#"> Question</a>
            </li>
            <li>
              <a href="/#"> Collaboration</a>
            </li>
            <li>
              <a href="/#"> Jobs</a>
            </li>
            <li>
              <a href="/#"> My Circle</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/#">  login </a>
            </li>
            <li>
              <a href="/#"> News</a>
            </li>
            <li>
              <a href="/#"> Help Center</a>
            </li>
            <li>
              <a href="/#"> Terms</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/#"> Privacy</a>
            </li>
            <li>
              <a href="/#">  Advertising</a>
            </li>
            <li>
              <a href="/#"> Recruiting</a>
            </li>

            <li>
              <a href="/#"> Q&A</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/#">  News </a>
            </li>
            <li>
              <a href="/#"> Copyright</a>
            </li>
            <li>
              <a href="/#"> Imprint</a>
            </li>
            <li>
              <a href="/#"> Researchers</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/#"> Publications</a>
            </li>
            <li>
              <a href="/#"> Jobs</a>
            </li>
          </ul>
        </div>
        <div className="footer-soc">
          <ul>
            <li>
              <img alt="" src={fb} />{" "}
            </li>
            <li>
              <img alt="" src={twit} />{" "}
            </li>
            <li>
              <img alt="" src={link} />{" "}
            </li>
          </ul>
        </div>
        <h4>© 2008-2021 Researchadvisor. All rights reserved.</h4>
      </footer>
    );
  }
}
export default _footer;
