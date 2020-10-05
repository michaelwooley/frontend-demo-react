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
   * If true, includes a close button.
   */
  closeButton?: boolean;

  /**
   * Actual modal content
   */
  children: React.ReactNode;
}

/**
 * TODO Add escape key handler
 */
export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onToggle,
  closeButton = false,
  children,
  ...props
}) => {
  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`} {...props}>
      <div className="modal-background"></div>
      {children}
      {closeButton && (
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onToggle}
        ></button>
      )}
    </div>
  );
};
