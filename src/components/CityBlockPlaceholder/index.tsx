import React from "react";
import "./index.scss";

export interface CityBlockPlaceholderProps {
  title: string;

  description: string;

  icon: string;

  expand?: boolean;

  /**
   * Open the station config modal
   */
  onToggle: () => void;
}

/**
 * Placeholder "button" for editing cities.
 */
export const CityBlockPlaceholder: React.FC<CityBlockPlaceholderProps> = ({
  title,
  description,
  icon,
  expand = false,
  onToggle,
  ...props
}) => {
  return (
    <div
      className={`city-block-placeholder box has-background-light mb-4 mt-4 ${
        expand ? "expanded" : ""
      }`}
      {...props}
      onClick={onToggle}
    >
      <div className="content has-text-centered">
        <h2 className="title is-2">
          <span className="icon is-large">
            <i className={icon}></i>
          </span>
        </h2>
        <br></br>
        <h2 className="title is-4">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
