import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Button from "@material-ui/core/Button";
import Image from "..//..//App/background.PNG";
import ImageLogin from "..//Login//background.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

let imgLogOrigH;
let imgLogOrigW;

const widthScreen = window.innerWidth;
const heightScreen = window.innerHeight;

const onImgLoad = ({ target: ImageLogin }) => {
  imgLogOrigH = ImageLogin.height;
  imgLogOrigW = ImageLogin.width;
  console.log("width:" + widthScreen + ",high:" + heightScreen);
  console.log("width:" + imgLogOrigW + ",high:" + imgLogOrigH);
  console.log(
    Math.floor(heightScreen / 2) -
      (Math.floor(heightScreen / 2) - Math.floor(imgLogOrigH) / 2)
  );
};

const styles = {
  paperContainer: {
    width: widthScreen + "px",
    height: heightScreen + "px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
  },
};

const Img = styled("img")({
  height: "75%",
  width: "30%",
  VerticalAlign: "center",
  HorizontalAlign: "center",
  AlignItems: "center",
  //'display': 'flex',
  //direction:"column",
  justifyContent: "center",
  //'position': 'absolute',
  //'top': '100px',
  //'right': '550px'
  //'top': Math.floor(heightScreen / 2) - Math.floor(imgLogOrigH / 2)+'px',
});

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="page page-login">
      <Img alt="login" src={ImageLogin} onLoad={onImgLoad} />

      {/* <form onSubmit={handleSubmit}>
      {/* <Grid item style={{ bottom: "230px", right: "164px" }}>
          Please Login
        </Grid>
        <TextField
          required
          variant="outlined"
          label="User"
          color="secondary"
          size="small"
          style={{ bottom: "-100px", right: "164px" }}
          onChange={(e) => setUserName(e.target.value)}
        ></TextField>
        ,
        <TextField
          required
          variant="outlined"
          label="Password"
          color="secondary"
          size="small"
          style={{ bottom: "-330px", right: "164px" }}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        ,
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ bottom: "-400px", right: "300px" }}
        >
          Submit{" "}
        </Button> */}
      {/* </form> */}
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
