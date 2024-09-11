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
} from "@mui/material";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useState, ChangeEvent } from "react";
import "./styles.css";
import * as React from "react";
import { sendContactForm } from "../../../lib/api";

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
      paper: "#1A2027", // Adjust to your preference for the dark mode background
    },
    error: {
      main: "#f44336",
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
    // setTimeout(() => {
    //   setState((prev) => ({
    //     ...prev,
    //     isLoading: false,
    //   }));
    //   setOpen(true);
    // }, 2000);
    // 2-second delay for demonstration

    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      setOpen(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: (error as Error).message,
      }));
    }

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
          minHeight: "100vh",
        }}
        className="min-h-screen"
      >
        <Container
          maxWidth="xs"
          style={{
            marginTop: "4rem",
            marginBottom: "70px",
            padding: "2rem",
            borderRadius: "16px", // Increased border radius for a softer look
            background: "rgba(255, 255, 255, 0.1)", // Translucent glass effect
            backdropFilter: "blur(20px)", // Increased blur for a stronger glass effect
            border: "1px solid rgba(255, 255, 255, 0.3)", // Thicker border for better contrast
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", // Stronger shadow for a more 3D effect
            position: "relative", // Ensure the container does not affect the snackbar's position
            width: "90%",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: "Gloock, serif", // Change font family to Gloock
              color: "#ffffff",
              marginBottom: "1rem",
              textAlign: "center", // Center the text
              maxWidth: {
                xs: "90%", // 90% width on extra small screens
                sm: "80%", // 80% width on small screens
                md: "70%", // 70% width on medium screens
                lg: "60%", // 60% width on large screens
              },
              mx: "auto", // Center horizontally
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
            margin="normal"
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
            />
          </FormControl>

          <FormControl
            fullWidth
            margin="normal"
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
            />
          </FormControl>

          <FormControl
            fullWidth
            margin="normal"
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
              helperText={touched.subject && !values.subject ? "Required" : ""}
              variant="outlined"
            />
          </FormControl>

          <FormControl
            fullWidth
            margin="normal"
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
              helperText={touched.message && !values.message ? "Required" : ""}
              multiline
              rows={4}
              variant="outlined"
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
          >
            {isLoading ? <CircularProgress size={24} /> : "send"}
          </Button>
        </Container>

        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          sx={{
            position: "fixed",
            bottom: 20,
            left: 20,
            width: "auto",
            maxWidth: "calc(100% - 40px)", // Ensures it does not exceed screen width
            minWidth: "150px", // Optional: to ensure it's not too narrow
          }}
        >
          <Alert
            onClose={handleClose}
            variant="filled"
            sx={{ width: "auto", backgroundColor: "#a4cdf5" }}
          >
            Mail sent successfully
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}
