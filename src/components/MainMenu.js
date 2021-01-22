import React from "react";
import "./MainMenu.css";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div class="btn-group-vertical selection">
      <Link class="link" to="/register">
        <button type="button" class="btn btn-outline-dark">
          Register New Car
        </button>
      </Link>
      <Link class="link" to="/view">
        <button type="button" class="btn btn-outline-dark">
          View Cars
        </button>
      </Link>
      <Link class="link" to="/delete">
        <button type="button" class="btn btn-outline-dark">
          Delete a Car
        </button>
      </Link>
    </div>
  );
};

export default MainMenu;
