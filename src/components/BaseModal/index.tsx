import React from "react";
import "./index.scss";

export interface BaseModalProps {
  /**
   * If true, modal is open.
   */
  isOpen: boolean;

  /**
   * Toggle modal open/close
   */
  onToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Actual modal content
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onToggle,
  children,
  ...props
}) => {
  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`} {...props}>
      <div className="modal-background"></div>
      {children}
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onToggle}
      ></button>
    </div>
  );
};
