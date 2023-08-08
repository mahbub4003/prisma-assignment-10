import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" flax ">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
