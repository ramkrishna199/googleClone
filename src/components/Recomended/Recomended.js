import React from "react";
import "./recomended.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStateValue } from "../../store/StateProvider";
// import Search from "../../components/search/Search";
// import useGoogleSearch from "../../useGoogleSearch";

const Recomended = () => {
  const [{ term }] = useStateValue();
  //   const { data } = useGoogleSearch(term);
  //   console.log(data);
  return (
    <div className="related__body">
      <h2>
        Related searches <MoreVertIcon className="more__related" />
      </h2>
      {term && (
        <div className="related">
          <div className="related__left">
            <p>
              <SearchIcon className="search__related" /> {term}
            </p>
            <p>
              <SearchIcon className="search__related" /> About {term}
            </p>
            <p>
              <SearchIcon className="search__related" /> {term} Home Page
            </p>
          </div>
          <div className="related__right">
            <p>
              <SearchIcon className="search__related" /> {term} Image
            </p>
            <p>
              <SearchIcon className="search__related" /> {term} Related
            </p>
            <p>
              <SearchIcon className="search__related" /> More About {term}
            </p>
          </div>
        </div>
      )}

      <div className="img__recom">
        <div>
          <span className="prv">&laquo;</span>
          <span className="color__blue">G</span>
          <span className="color__yellow">oooo</span>
          <span className="color__red">o</span>
          <span className="color__yellow">o</span>
          <span className="color__blue">g</span>
          <span className="color__green">l</span>
          <span className="color__red">e</span>
          <span className="nxt">&raquo;</span>
        </div>
      </div>
      <div className="prev__next">
        <div>
          <span className="previous">Previous</span>
          <p>1 2 3 4 5 6</p>
          <span className="next">Next</span>
        </div>
      </div>
    </div>
  );
};

export default Recomended;

// facebook open
// facebook account
// login facebook
// facebook lite
// facebook download
// facebook app
// facebook search
// facebook login check
