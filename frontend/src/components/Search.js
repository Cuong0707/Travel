import React from "react";
import '../style/Search.scss';
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { EyeFill, GeoAltFill } from "react-bootstrap-icons";

const Search = () => {
    const location = useLocation();
    const searchResults = location.state && location.state.searchResults;
    const [searchParams, setSearchParams] = useSearchParams();
    console.warn(searchParams.get('city'))
    const city = searchParams.get('city')
    console.log(searchResults[0].hotelId);
    return (

        <div className="container">
            <div className="container-search">
                <p className="fs-3">Kết quả hiển thị: {city}</p>

                {searchResults.map((hotel, index) => (
                    <div key={index} className="card-MainHotel">
                        <div className="card mb-3 border-0">
                            <div className="row g-0">
                                <div className="col-md-3 img-MainHotel">
                                    <img src={hotel.photosOfHotels[0].image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body row">
                                        <h5 className="card-title fw-bold col-10">{hotel.nameOfHotel}</h5>
                                        <p className="card-text col-2 text-info text-end fw-bold"><EyeFill /> {hotel.view}</p>
                                        <p className="card-text fw-bold">Mô tả: {hotel.description!='null'?hotel.description:"Không có mô tả"} </p>
                                        <p className="card-text">
                                            <span className="badge bg-warning text-dark text-secondary">Excluded</span>
                                            <span className="badge bg-warning text-dark text-secondary ms-2">{hotel.typeOfHotel}</span>
                                            <span className="badge bg-warning text-dark text-secondary ms-2">{hotel.standard} star</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search