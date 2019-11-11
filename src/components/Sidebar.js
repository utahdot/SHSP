import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import $ from "jquery";

class Sidebar extends Component {

  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-udot-dark sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
      <div
        to="/"
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon rotate-n-15">

        </div>
      </div>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <NavLink className="nav-link" to="/summary">
            <div class="nav-icon executive">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.99 10.6">
                <title>Document</title>
                <g>
                  <rect class="svg_light" width="8.99" height="10.6"/>
                  <line class="cls-2" x1="1.79" y1="1.91" x2="7.2" y2="1.91"/>
                  <line class="cls-2" x1="1.79" y1="3.63" x2="7.2" y2="3.63"/>
                  <line class="cls-2" x1="1.79" y1="5.34" x2="7.2" y2="5.34"/>
                  <line class="cls-2" x1="1.79" y1="7.05" x2="7.2" y2="7.05"/>
                  <line class="cls-2" x1="1.79" y1="8.77" x2="4.58" y2="8.77"/>
                </g>

              </svg>
            </div>
            <span>Excutive Summary</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item leadership">
          <NavLink className="nav-link" to="/safetyleadership">
            <div class="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.35 11.28">
                <title>avatar</title>
                <path class="svg_light" d="M7.18,5.9C10,7.24,10.33,7.34,10.34,7.82c0,.76,0,1.52,0,2.28a30.48,30.48,0,0,1-5.17,1.18A30.4,30.4,0,0,1,0,10.1c0-.76,0-1.52,0-2.28,0-.48.32-.58,3.16-1.92l1,3h.23l.36-2.06a.61.61,0,0,1-.24-.47V6.32A.37.37,0,0,1,4.94,6h.47a.36.36,0,0,1,.36.36v.06a.6.6,0,0,1-.23.47L5.9,8.91h.23ZM5.17,0A2.56,2.56,0,1,1,2.62,2.55,2.55,2.55,0,0,1,5.17,0Z"/>
              </svg>
            </div>
            <span>Safety Leadership</span>
          </NavLink>
        </li>
          <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <NavLink className="nav-link" to="/fivees">
          <div class="nav-icon five_e">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.88 12.66">
              <title>five_e</title>
              <rect class="svg_light" x="2.35" y="2.35" width="9.27" height="10.06" rx="0.6"/>
              <rect class="svg_light" x="1.3" y="1.3" width="9.27" height="10.06" rx="0.6"/>
              <rect class="svg_light" x="0.26" y="0.26" width="9.27" height="10.06" rx="0.6"/>
              <text class="cls-2" transform="translate(2.9 7.82)">E</text>
            </svg>
          </div>
          <span>The Five E's</span>
          </NavLink>
        </li>
          <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <NavLink className="nav-link" to="/evaluation">
            <div class="nav-icon evaluation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.99 11.82">
              <title>clipbord</title>
              <rect class="svg_light" y="1.23" width="8.99" height="10.6"/>
              <polyline class="cls-2" points="6.62 5.03 3.71 7.94 2.37 6.59"/>
              <circle class="svg_light" cx="4.49" cy="1.23" r="1.23"/>
              <circle class="cls-3" cx="4.49" cy="1.23" r="0.51"/>
            </svg>
            </div>
            <span>Evaluation</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a
            className="nav-link collapses"
            to=""
            data-toggle="collapse"
            data-target="#safetyAreas"
            aria-expanded="false"
            area-controls="safetyAreas"
          >
            <div class="nav-icon safety">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.67 10.67">
                <title>cog</title>
                <path class="svg_light" d="M10.67,6.06V4.62c-.73-.26-1.19-.34-1.43-.9h0c-.23-.57,0-1,.38-1.65l-1-1c-.69.33-1.08.62-1.65.38H7C6.39,1.2,6.32.73,6.06,0H4.62c-.26.73-.33,1.2-.9,1.43h0c-.57.24-1,0-1.65-.38l-1,1c.34.7.62,1.08.38,1.65s-.7.64-1.43.9V6.06c.73.25,1.2.33,1.43.89s-.05,1-.38,1.65l1,1c.7-.33,1.08-.61,1.65-.38h0c.57.24.64.7.9,1.43H6.06c.25-.72.33-1.19.9-1.43H7c.56-.23.94,0,1.64.38l1-1C9.29,7.91,9,7.52,9.24,7S10,6.31,10.67,6.06ZM5.34,7.12A1.78,1.78,0,1,1,7.12,5.34,1.78,1.78,0,0,1,5.34,7.12Z"/>
              </svg>
            </div>

            <span>Safety Areas</span>
          </a>
          <div
            id="safetyAreas"
            className="collapse force-top"
            aria-labelledby="SafetyAreas"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <NavLink className="collapse-item" to="/safetyareas">
                Safety Areas
              </NavLink>
              <NavLink className="collapse-item" to="/emphasis">
                Emphasis
              </NavLink>
              <NavLink className="collapse-item" to="/continuing">
                Continuing
              </NavLink>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    );
  }
}
export default withRouter(Sidebar);
