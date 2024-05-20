import React from "react";
const Card = ({ children }) => {
  return (
    <>
      <div className="text-white p-4 my-4 flex justify-between">
        <p>{children}</p>
        <a href="https://six6s6.com/af/GNp0dr3s/blackhat">
          <div className="flex align-center gap-3">
            <svg
              viewBox="0 0 16 16"
              className="text-black icon-direction"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
            </svg>{" "}
            <svg
              viewBox="0 0 16 16"
              className="text-black icon-direction"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
