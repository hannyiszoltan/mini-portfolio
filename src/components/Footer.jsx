import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-700 py-10 text-sm text-center text-white dark:text-slate-100 opacity-50">
      &copy; {new Date().getFullYear()} Hannyis Zoltán.
      <br />
      All rights reserved.
    </footer>
  );
}

export default Footer;
