import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";

class Sidebar extends Component {
  toggleSidebar() {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  }
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-udot-dark sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        <NavLink
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-road" />
          </div>
          <div className="sidebar-brand-text mx-3">
            HSSP <sup>5.0</sup>
          </div>
        </NavLink>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <NavLink className="nav-link" to="/summary">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Executive Summary</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <NavLink className="nav-link" to="/SafetyLeadership">
            <i className="fas fa-fw fa-cog" />
            <span>Safety Leadership</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/SafetyLeadership">
            <i className="fas fa-fw fa-project-diagram" />
            <span>Five E's</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/SafetyLeadership">
            <i className="fas fa-fw fa-clipboard-check" />
            <span>Evaluation</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Safety Areas</div>
        <li className="nav-item">
          <a
            className="nav-link collapses"
            href="#"
            data-toggle="collapse"
            data-target="#safetyAreas"
            aria-expanded="false"
            area-controls="safetyAreas"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Safety Areas</span>
          </a>
          <div
            id="safetyAreas"
            className="collapse"
            aria-labelledby="SafetyAreas"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Safety Areas</h6>
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
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={this.toggleSidebar}
          />
        </div>
      </ul>
    );
  }
}

export default Sidebar;
