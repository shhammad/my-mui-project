import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import "./style.scss";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="loginForm">
        <div className="heading">Log in to your account</div>
        <div className="form">
          <form>
            <div className="field">
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton>
                        <Person2OutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  //   label="Username"
                  placeholder="Username"
                />
              </FormControl>
            </div>
            <div className="field">
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton>
                        <HttpsOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  //   label="Password"
                  placeholder="Password"
                />
              </FormControl>
            </div>
            <div className="checkboxs">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Keep me logged in"
              />
            </div>
            <div className="submit">
              <Button variant="contained">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
