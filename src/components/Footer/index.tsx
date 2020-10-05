import { APP_NAME, URL } from "common/constants";
import React from "react";
import "./index.scss";

export interface FooterProps {}

/**
 * Primary UI component for user interaction
 */
export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <>
      <div className="spacer" />
      <footer className="footer" {...props}>
        <div className="columns">
          <div className="column is-3">
            <h6 className="is-size-5">
              <strong>{APP_NAME}</strong> by{" "}
              <a
                href="mailto:wm.wooley@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael Wooley
              </a>
              .
            </h6>
            <ul className="is-size-7">
              <li>
                <a
                  href="https://github.com/michaelwooley/frontend-demo-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>{" "}
                licensed{" "}
                <a
                  href="https://opensource.org/licenses/mit-license.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h6 className="is-size-5">
              <strong>Contribute</strong> on GitHub
            </h6>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=michaelwooley&repo=frontend-demo-react&type=star&count=false&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub Star"
            />
            <br />
            <iframe
              src="https://ghbtns.com/github-btn.html?user=michaelwooley&type=follow&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="230"
              height="30"
              title="GitHub Follow"
            />
          </div>
          <div className="column is-3">
            <h6 className="is-size-5">
              <strong>Credits</strong>
            </h6>
            <ul className="is-size-7">
              <li>
                Weather data drawn from{" "}
                <a
                  href="https://www.weather.gov/documentation/services-web-api#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Weather Service (weather.gov)
                </a>
              </li>
              <li>
                Built with{" "}
                <a href="reactjs.org" target="_blank" rel="noopener noreferrer">
                  react.js
                </a>
              </li>
              <li>
                UI by{" "}
                <a
                  href="https://bulma.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bulma
                </a>
              </li>
              <li>
                Icons by{" "}
                <a
                  href="https://fontawesome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Font Awesome
                </a>
              </li>
            </ul>
          </div>
          <div className="column" />
          <div className="column is-narrow">
            <h6 className="is-size-5">
              <strong>Share</strong>
            </h6>
            <ul className="is-size-7">
              <li>
                <a
                  href={`https://twitter.com/home?status=${URL} A free weather app, written in svelte!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    {" "}
                    <i className="fab fa-twitter" />{" "}
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}&title=${APP_NAME}&summary=A free weather app, written in svelte!&source=`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    {" "}
                    <i className="fab fa-linkedin" />{" "}
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    {" "}
                    <i className="fab fa-facebook" />{" "}
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:info@example.com?body=${URL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    {" "}
                    <i className="fas fa-envelope" />{" "}
                  </span>
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
