import { APP_NAME } from "common/constants";
import React from "react";
import "./index.scss";

export interface NavProps {
  /**
   * If true, menu will be open in case of mobile
   */
  isActive: boolean;

  /**
   * Toggles visibility of mobile menu
   */
  onToggleActive: () => void;

  /**
   * Toggles city selector modal
   */
  onToggleCities: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Nav: React.FC<NavProps> = ({
  isActive = true,
  onToggleCities,
  onToggleActive,
}) => {
  return (
    <nav
      id="app-navbar"
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item is-selectable">
          <span className="icon has-text-primary">
            <i className="fa fa-cloud"></i>
          </span>
          <span className="ml-2 has-text-weight-bold">{APP_NAME}</span>
        </div>
        <div
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={onToggleActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        {/* 
        <div className="navbar-start">
          <a className="navbar-item">About</a> 
        </div>*/}

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                className="button is-link is-outlined is-fullwidth"
                onClick={onToggleCities}
              >
                <span className="icon">
                  <i className="fa fa-city"></i>
                </span>
                <span className="has-text-weight-semibold">Cities</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
