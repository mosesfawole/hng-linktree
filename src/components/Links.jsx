import React, { useState } from "react";
import GithubIcon from "../assets/icons8-github.svg";
import SlackIcon from "../assets/icons8-slack-new.svg";
const Links = () => {
  const [show, setShow] = useState(false);

  const handleHover = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="links">
        <a href="https://twitter.com/pharwoleh" id="twitter">
          Twitter
        </a>
        <a
          href="https://training.zuri.team/
              "
          id="btn-zuri"
        >
          Zuri Team
        </a>
        <a
          onMouseEnter={handleHover}
          href="https://books.zuri.team/"
          title="Find books about design and coding"
          id="books"
        >
          Zuri Books
        </a>
        {show ? (
          <sub className="books">Find books about design and coding.</sub>
        ) : (
          ""
        )}
        <a
          onMouseEnter={handleHover}
          href="https://books.zuri.team/python-for-beginners?ref_id=<mosesfawole>"
          id="book_python"
        >
          Python books
        </a>
        {show ? (
          <sub>
            You want to learn Python as a complete beginner to being a pro? Then
            this book is what you need!
          </sub>
        ) : (
          ""
        )}
        <a href="https://background.zuri.team/" id="pitch">
          Background check for coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="btn-zuri">
          Design Books
        </a>
        <sub>Free design book offerd by Zuri</sub>
      </div>
      <div className="link-footer">
        <div className="icons">
          <img src={SlackIcon} alt="slack icon" />
          <a href="https://github.com/mosesfawole">
            <img src={GithubIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
