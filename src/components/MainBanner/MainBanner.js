/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";

const mainBanner = css`
  background-color: pink;
`;

const MainBanner = () => {
  /* const [count, setCount] = useState(); */

  /* const fetchUsers = async () => {s
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      })
      .catch(console.log);
  }; */

  /* useEffect(() => {
    fetchUsers();
  }, []); */

  return (
    <div>
      <div css={mainBanner}>Main Banner</div>
    </div>
  );
};

export default MainBanner;
