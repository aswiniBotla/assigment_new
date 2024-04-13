import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCharacter } from "../../redux/slices/newCharacterSlice";
import LeftBar from "../LeftBar";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Grid,
  InputLabel,
} from "@mui/material";
import "./index.css";

function ProfileCreate() {
  const [formData, setFormData] = useState({
    characterName: "",
    tagline: "",
    description: "",
    greeting: "",
    definition: "",
    privacy: "Private",
    showOptions: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleOptions = () => {
    setFormData((prevData) => ({
      ...prevData,
      showOptions: !prevData.showOptions,
    }));
  };

  const handlePrivacyChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      privacy: event.target.value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleCreateCharacter = () => {
    dispatch(addCharacter(formData));
  };

  console.log(formData);
  return (
    <div className="home-bg" style={{ overflow: "hidden" }}>
      <LeftBar />
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-around",
          overflow: "hidden",
          margin: "5px",
          marginRight: "15px",
        }}
      >
        <div>
          <KeyboardArrowLeftIcon
            onClick={handleClick}
            style={{ marginTop: "70px", marginLeft: "30px" }}
          />
        </div>

        <Grid item xs={12} md={8} style={{ marginRight: "30px" }}>
          <div className="container home-content">
            <div className="circle">A</div>

            <TextField
              label="Character name"
              variant="outlined"
              placeholder="e.g. Albert Einstein"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
              name="characterName"
              value={formData.characterName}
              onChange={handleChange}
            />

            <TextField
              label="Tagline"
              variant="outlined"
              placeholder="Add a short tagline of your Character"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
            />

            <TextField
              label="Description"
              variant="outlined"
              placeholder="How would your Character describe themselves?"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <TextField
              label="Greeting"
              variant="outlined"
              placeholder="e.g. Hello, I am Albert. Ask me anything about my scientific contributions."
              multiline
              rows={4}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
              name="greeting"
              value={formData.greeting}
              onChange={handleChange}
            />

            {formData.showOptions && (
              <div>
                <TextField
                  label="Definition"
                  variant="outlined"
                  placeholder="What's your Character Backstory? How do you Want it to talk or act?"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  required
                  name="definition"
                  value={formData.definition}
                  onChange={handleChange}
                />

                <FormControlLabel
                  control={<Checkbox id="checkbox1" />}
                  label="Keep Character definition private"
                  className="checkbox-label"
                />
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Button onClick={toggleOptions}>
                {formData.showOptions ? "Less Options" : "More Options"}
              </Button>
            </div>

            <div style={{ width: "150px", padding: "0px" }}>
              <InputLabel style={{ marginBottom: "5px" }}>
                Visibility
              </InputLabel>
              <Select
                className="visibility-select"
                value={formData.privacy}
                onChange={handlePrivacyChange}
                fullWidth
                margin="normal"
                required
                name="privacy"
              >
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </Select>
            </div>
            <div
              fullWidth
              style={{
                padding: "0px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: "200px",
                  padding: "0px",
                }}
              >
                <Button variant="contained" onClick={handleCreateCharacter}>
                  Create Character
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileCreate;
