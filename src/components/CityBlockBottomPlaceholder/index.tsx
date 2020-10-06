import React from "react";
import "./index.scss";

export interface CityBlockBottomPlaceholderProps {
  /**
   * Open the station config modal
   */
  onToggle: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CityBlockBottomPlaceholder: React.FC<CityBlockBottomPlaceholderProps> = ({
  onToggle,
  ...props
}) => {
  return (
    <div
      className="city-block-placeholder box has-background-light mb-4 mt-4"
      {...props}
      onClick={onToggle}
      title="Click here or on the top-right button to edit your cities."
    >
      <div className="content has-text-centered">
        <h2 className="title is-4">
          <span className="icon">
            <i className="fas fa-edit"></i>
          </span>
          <span> Add or edit your cities</span>
        </h2>
        <p>Click here to edit</p>
      </div>
    </div>
  );
};
