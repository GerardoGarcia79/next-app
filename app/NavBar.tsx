import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="flex bg-slate-200 p-5">
        <Link href="/" className="mr-5">
          Next.js
        </Link>
        <Link href="/users">Users</Link>
      </div>
    </nav>
  );
};

export default NavBar;
