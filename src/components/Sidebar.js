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
          <NavLink className="nav-link" to="/SafetyLeadership" >
            <i className="fas fa-fw fa-cog" />
            <span>Safety Leadership</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Five E's</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse force-top"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="utilities-color.html">
                Engineering
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Enforcement
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Education
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Emergency Response
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Everyone
              </a>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Safety Areas</div>
        <li className="nav-item">
          <NavLink className="nav-link collapsed" to="/emphasis">
            <i className="fas fa-fw fa-folder" />
            <span>Emphasis</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/continuing">
            <i className="fas fa-fw fa-chart-area" />
            <span>Continuing</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/special">
            <i className="fas fa-fw fa-table" />
            <span>Special</span>
          </NavLink>
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
