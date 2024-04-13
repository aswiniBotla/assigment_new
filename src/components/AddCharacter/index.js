import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const circleStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "24px",
};

const AddCharacter = () => {
  const [FirstCharacterName, setfirstCharacterName] = useState("");
  const characterName = useSelector((state) => state);

  useEffect(() => {
    console.log(characterName);
    setfirstCharacterName(characterName);
  }, [characterName]);

  console.log(FirstCharacterName, characterName);

  return (
    <div style={{ display: "flex" }}>
      <div className="circle" style={circleStyle}>
        a
      </div>
      <p style={{ marginTop: "12px", marginLeft: "5px" }}>ashoke gorlu</p>
    </div>
  );
};

export default AddCharacter;
