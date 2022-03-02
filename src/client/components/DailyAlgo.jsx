/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import './DailyAlgo.css';
import PromptChanger from './PromptChanger.jsx';
import FormModal from './FormModal.jsx';
import YoutubeEmbed from "./YoutubeEmbed.jsx";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

/**
 *
 * prompt changes daily based on fetch request from database
 *
 */

function randomAlgo(arr) {
  return Math.floor(Math.random() * arr.length);
}

function youtubeLinkParse(str) {
  let result = str.slice(str.indexOf("v=") + 2);
  return result;
}

function handleClick(link) {
  location.href = link;
}

const DailyAlgo = ({ data }) => {
  const rows = data; 
  const algo = (rows) ? rows[randomAlgo(rows)] : null;

  return (
    <div className="outerBox">
      <span className="element">
        <h1>Algo of the Day</h1>
      </span>
      {algo ? (
        <div className="element">
          <h2 className="algoName"> {algo.name} </h2>
          <YoutubeEmbed
            className="element"
            embedId={youtubeLinkParse(algo.solution)}
          />
          <ThemeProvider theme={theme}>
            <Button
              className="element"
              color="neutral"
              variant="contained"
              type="button"
              onClick={() => {
                handleClick(algo.link);
              }}
            >
              {`Practice ${algo.name} on Leet Code`}
            </Button>
          </ThemeProvider>
        </div>
      ) :
        <div className="placeHolder">
        </div>
      }
    </div>
  );};
  
export default DailyAlgo; 

