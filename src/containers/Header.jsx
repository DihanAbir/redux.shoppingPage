import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Fake shiop</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Header;
