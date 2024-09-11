"use client";

import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
  CircularProgress,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useState, ChangeEvent } from "react";
import "./styles.css";
import * as React from "react";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

interface State {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initState: State = { isLoading: false, error: "", values: initValues };

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "rgba(255, 255, 255, 0.1)",
    },
    error: {
      main: "#f44336",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)", // Frosted glass effect
          WebkitBackdropFilter: "blur(10px)", // Support for Safari
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          borderRadius: "12px",
          color: "#fff", // Ensure all text inside the card is white
        },
      },
    },
  },
});

export default function Contact() {
  const [state, setState] = useState<State>(initState);
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});
  const [open, setOpen] = React.useState(false);

  const { values, isLoading, error } = state;

  const onBlur = ({ target }: React.FocusEvent<HTMLInputElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // Simulate a network request or form submission delay
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      setOpen(true);
    }, 2000);
    // 2-second delay for demonstration
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="min-h-screen"
      >
        <Container
          maxWidth="xs"
          style={{
            marginTop: "3rem",
            marginBottom: "70px",
          }}
        >
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: "Gloock, serif",
                  marginBottom: "1rem",
                  color: "#ffffff",
                }}
              >
                Contact us
              </Typography>
              {error && (
                <Typography color="error" variant="body1" gutterBottom>
                  {error}
                </Typography>
              )}

              <FormControl
                fullWidth
                margin="dense"
                required
                error={touched.name && !values.name}
              >
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  helperText={touched.name && !values.name ? "Required" : ""}
                  variant="outlined"
                  InputProps={{
                    style: { color: "#ffffff" },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffffff" },
                  }}
                />
              </FormControl>

              <FormControl
                fullWidth
                margin="dense"
                required
                error={touched.email && !values.email}
              >
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  helperText={touched.email && !values.email ? "Required" : ""}
                  variant="outlined"
                  InputProps={{
                    style: { color: "#ffffff" },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffffff" },
                  }}
                />
              </FormControl>

              <FormControl
                fullWidth
                margin="dense"
                required
                error={touched.subject && !values.subject}
              >
                <TextField
                  id="subject"
                  name="subject"
                  label="Subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                  helperText={
                    touched.subject && !values.subject ? "Required" : ""
                  }
                  variant="outlined"
                  InputProps={{
                    style: { color: "#ffffff" },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffffff" },
                  }}
                />
              </FormControl>

              <FormControl
                fullWidth
                margin="dense"
                required
                error={touched.message && !values.message}
              >
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                  helperText={
                    touched.message && !values.message ? "Required" : ""
                  }
                  multiline
                  rows={4}
                  variant="outlined"
                  InputProps={{
                    style: { color: "#ffffff" },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffffff" },
                  }}
                />
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message ||
                  isLoading
                }
                onClick={onSubmit}
                fullWidth
                style={{ marginTop: "1rem" }}
              >
                {isLoading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                sx={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  zIndex: 1400,
                  width: "auto",
                  maxWidth: "100%",
                }}
              >
                <Alert
                  onClose={handleClose}
                  variant="filled"
                  sx={{ width: "100%", backgroundColor: "#a4cdf5" }}
                >
                  Mail sent successfully
                </Alert>
              </Snackbar>
            </CardContent>
          </Card>
        </Container>
      </div>
    </ThemeProvider>
  );
}
