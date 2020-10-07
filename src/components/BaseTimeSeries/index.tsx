import React from "react";
import "./index.scss";

export interface BaseTimeSeriesProps {
  /**
   * title
   */
  title: string;

  /**
   * Help text below the title
   */
  description: string;

  /**
   * className of icon to be used
   */
  icon: string;

  /**
   * If true, will expand box to be 80vh
   */
  expand?: boolean;

  /**
   * If true, places the icon next to title. If false, places on top line.
   */
  inline?: boolean;

  /**
   * Open the station config modal
   */
  onToggle: () => void;
}

/**
 * Placeholder "button" for editing cities.
 */
export const BaseTimeSeries: React.FC<BaseTimeSeriesProps> = ({
  title,
  description,
  icon,
  expand = false,
  inline = true,
  onToggle,
  ...props
}) => {
  return (
    <div
      className={`city-block-placeholder box mb-4 mt-4 ${
        expand ? "expanded" : ""
      }`}
      {...props}
      onClick={onToggle}
      title="Click here or the on the button in the top-right to edit your cities."
    >
      <div className="content has-text-centered">
        {!inline && (
          <>
            <h2 className="title is-2">
              <span className="icon is-large">
                <i className={icon}></i>
              </span>
            </h2>
            <br></br>
          </>
        )}
        <h2 className="title is-4">
          {inline && (
            <span className="icon pr-2">
              <i className={icon}></i>
            </span>
          )}
          <span>{title}</span>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
