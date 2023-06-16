import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./searchPage.css";
import { useStateValue } from "../../store/StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Recomended from "../../components/Recomended/Recomended";


const SearchPage = () => {
    const [{ term }] = useStateValue();
    const { data } = useGoogleSearch(term);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="/"
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hidebuttons />

                    <div className="search__options">
                        <div className="searchPage__optionLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/map">Map</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionRight">
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="settings">
                    <SettingsIcon className="settings__icon" />
                    <AppsIcon className="sapps__icon" />
                    <Avatar />
                </div>
            </div>



            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime} seconds)
                    </p>
                    {data?.items.map((item, index) => (
                        <>
                            <div key={index} className="searchPage__result">
                                <a href={item.link} className="searchPage__resultLink">
                                    {item.displayLink}
                                </a>
                                <a href={item.link} className="searchPage__resultTitle">
                                    <h2>{item.title}</h2>
                                </a>

                                <p className="searchPage__resultDescription">{item.snippet}</p>
                            </div>
                        </>
                    ))}
                    <Recomended />
                    <Footer />
                </div>
            )
            }

        </div>
    );
};

export default SearchPage;
