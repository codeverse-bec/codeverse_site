"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from "@mui/material/Snackbar"; // Import Snackbar
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { Contestant } from "./contestants"; // Adjust import as needed

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        sx={{ color: page === 0 ? "gray" : "white" }}
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{ color: page === 0 ? "gray" : "white" }}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{
          color: page >= Math.ceil(count / rowsPerPage) - 1 ? "gray" : "white",
        }}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        sx={{
          color: page >= Math.ceil(count / rowsPerPage) - 1 ? "gray" : "white",
        }}
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

interface ContestantTableProps {
  contestants: Contestant[];
}

export default function ContestantTable({ contestants }: ContestantTableProps) {
  const [page, setPage] = React.useState(0);
  const [searchText, setSearchText] = React.useState(""); // Search input state
  const [highlightRow, setHighlightRow] = React.useState<string | null>(null); // Highlight state
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const rowsPerPage = 10;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contestants.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const getRowColor = (rank: number) => {
    if (rank === 1) return "#B59410"; // Gold
    if (rank === 2) return "#C0C0C0"; // Silver
    if (rank === 3) return "#CD7F32"; // Bronze
    return "inherit"; // Default color
  };

  const handleSearch = () => {
    if (!searchText.trim()) {
      setHighlightRow(null);
      return; // If searchText is empty, do nothing
    }

    const foundContestant = contestants.find(
      (contestant) => contestant.registrationNumber === searchText
    );
    if (foundContestant) {
      const newPage = Math.floor(
        contestants.indexOf(foundContestant) / rowsPerPage
      );
      setPage(newPage);
      setHighlightRow(foundContestant.registrationNumber);
    } else {
      setHighlightRow(null);
      setSnackbarOpen(true); // Open Snackbar if no contestant is found
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close the Snackbar
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#333",
          width: "80%",
          margin: "0 auto",
          marginBottom: "20px",
          boxShadow: `
      0px 0px 8px 2px rgba(255, 255, 255, 0.2), 
      0px 0px 15px 4px rgba(255, 255, 255, 0.1), 
      0px 0px 25px 6px rgba(255, 255, 255, 0.05)
    `,
          borderRadius: "10px",
        }}
      >
        <Table aria-label="custom pagination table">
          <TableBody>
            <TableRow style={{ textAlign: "center" }}>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  backgroundColor: "#1c1c1c",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  backgroundColor: "#1c1c1c",
                }}
              >
                Regd No
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#1c1c1c",
                }}
              >
                Contests Attended
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#1c1c1c",
                }}
              >
                Score
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#1c1c1c",
                }}
              >
                Rank
              </TableCell>
            </TableRow>
            {contestants
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.registrationNumber}
                  sx={{
                    backgroundColor:
                      highlightRow === row.registrationNumber
                        ? "rgba(255, 255, 0, 0.3)"
                        : getRowColor(row.rank),
                    animation:
                      highlightRow === row.registrationNumber
                        ? "glow 2s ease-in-out infinite"
                        : "none",
                    "@keyframes glow": {
                      "0%": { backgroundColor: "rgba(255, 255, 0, 0.3)" },
                      "50%": { backgroundColor: "rgba(255, 255, 0, 0.8)" },
                      "100%": { backgroundColor: "rgba(255, 255, 0, 0.3)" },
                    },
                    color: "#FFFFFF",
                  }}
                >
                  <TableCell
                    sx={{ color: "#FFFFFF" }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF" }}>
                    {row.registrationNumber}
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", textAlign: "center" }}>
                    {row.contestsAttended}
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", textAlign: "center" }}>
                    {row.score}
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", textAlign: "center" }}>
                    {row.rank === 1 ? (
                      <EmojiEventsIcon sx={{ color: "#FFFFFF" }} />
                    ) : (
                      row.rank
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                colSpan={5}
                count={contestants.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onPageChange={handleChangePage}
                ActionsComponent={TablePaginationActions}
                sx={{ color: "#FFFFFF" }} // Pagination controls text color
              />
            </TableRow>
          </TableFooter>
        </Table>
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Search by Registration Number"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch} sx={{ color: "#FFFFFF" }}>
                    <SearchIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: "350px", // Adjust the width as needed
              marginRight: "16px",
              "& .MuiInputBase-input": {
                color: "#FFFFFF", // Input text color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF", // Input border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFFFFF", // Input border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF", // Input border color when focused
                },
              },
            }}
          />
        </Box>
      </TableContainer>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Student not found
        </Alert>
      </Snackbar>
    </>
  );
}
