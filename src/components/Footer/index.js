import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new");
  };

  function create() {
    return (
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        onClick={handleClick}
      >
        Create a Character
      </Button>
    );
  }

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dxt3w8y0z/image/upload/v1712824481/Screenshot_2024-04-11_140227_fdgozi.png"
        alt="character"
        className="character"
      />
      <h1 className="character-heading">Create a Character</h1>
      <p className="character-paragraph">
        Not vibing with any characters? Create one of your own! Customize things{" "}
        <br />
        like their voice, conversation starts, their tone, and more!
      </p>
      {create()}
      <div className="sub">
        <p className="para">About</p>
        <p className="para">Carrers</p>
        <p className="para">Blogs</p>
      </div>
    </div>
  );
}
export default Footer;
