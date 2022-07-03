import React from "react";

const MenuIcon = ({ setMenuOpened }) => (
  <svg
    viewBox="0 0 100 80"
    width="40"
    height="40"
    color="white"
    onClick={() => setMenuOpened((openState) => !openState)}
  >
    <g color="#26dafd">
      <rect width="100" height="20" fill="currentcolor"></rect>
      <rect y="30" width="100" height="20" fill="currentcolor"></rect>
      <rect y="60" width="100" height="20" fill="currentcolor"></rect>
    </g>
  </svg>
);

export default MenuIcon;
