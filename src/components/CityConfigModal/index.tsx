import { BaseModal } from "components/BaseModal";
import React from "react";
import "./index.scss";

export interface CityConfigModalProps {
  /**
   * Toggle modal open/close
   */
  onToggle: () => void;

  /**
   * If true, modal is open.
   */
  isOpen: boolean;

  /**
   * Actual modal content
   */
  leftChild: React.ReactNode;

  rightChild: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const CityConfigModal: React.FC<CityConfigModalProps> = ({
  isOpen,
  onToggle,
  leftChild,
  rightChild,
}) => {
  return (
    <BaseModal isOpen={isOpen} onToggle={onToggle}>
      <div className="modal-card">
        <header className="modal-card-head pb-0 pt-0">
          <p className="modal-card-title has-text-weight-bold">
            <span className="icon">
              <i className="fas fa-city"></i>
            </span>
            <span className="pl-1">Add and edit your cities</span>
          </p>
          <button
            onClick={onToggle}
            className="delete"
            aria-label="close"
            title="Return to weather"
          ></button>
        </header>
        <section className="modal-card-body pb-0">
          <div className="body-columns columns pr-0 pl-0">
            <div className="column is-one-third">{leftChild}</div>
            <div className="column">{rightChild}</div>
          </div>
        </section>
      </div>
    </BaseModal>
  );
};
