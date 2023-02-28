import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./search.css";
import { useStateValue } from "../../store/StateProvider";
import { actionType } from "../../store/reducers/reducer";

function Search({ hidebuttons }) {
  const [{}, dispatch] = useStateValue();
  const [input, setIput] = useState("");

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="searchicon" />
        <input value={input} onChange={(e) => setIput(e.target.value)} />
        <MicIcon className="searchicon__mic" />
      </div>

      {!hidebuttons ? ( //&&
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I am feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons" style={{ display: "none" }}>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
