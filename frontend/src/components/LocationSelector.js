import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationSelector = () => {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        // Fetch cities
        axios
            .get("https://provinces.open-api.vn/api/?depth=1")
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleCityChange = (e) => {
        const selectedCityId = e.target.value;
        setSelectedCity(selectedCityId);

        // Fetch districts
        axios
            .get(`https://provinces.open-api.vn/api/p/${selectedCityId}?depth=2`)
            .then((response) => {
                setDistricts(response.data.districts);
                setSelectedDistrict("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDistrictChange = (e) => {
        const selectedDistrictId = e.target.value;
        setSelectedDistrict(selectedDistrictId);

        // Fetch wards
        axios
            .get(`https://provinces.open-api.vn/api/d/${selectedDistrictId}?depth=2`)
            .then((response) => {
                setWards(response.data.wards);
                setSelectedWard("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleWardChange = (e) => {
        const selectedWardId = e.target.value;
        setSelectedWard(selectedWardId);
    };

    useEffect(() => {
        if (selectedCity && selectedDistrict && selectedWard) {
            const city = cities.find((c) => c.code === selectedCity);
            const district = districts.find((d) => d.code === selectedDistrict);
            const ward = wards.find((w) => w.code === selectedWard);

            if (city && district && ward) {
                const resultString = `${city.name} | ${district.name} | ${ward.name}`;
                setResult(resultString);
            }
        } else {
            setResult("");
        }
    }, [cities, districts, wards, selectedCity, selectedDistrict, selectedWard]);

    return (
        <div>
            <div>
                <select
                    id="city"
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!cities.length}
                    className="mb-2 form-control mt-2"
                >
                    <option value="">Chọn tỉnh thành</option>
                    {cities.map((city) => (
                        <option key={city.code} value={city.code}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <select
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    disabled={!districts.length}
                    className="mb-2 form-control mt-2"
                >
                    <option value="">Chọn quận huyện</option>
                    {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                            {district.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <select
                    id="ward"
                    value={selectedWard}
                    onChange={handleWardChange}
                    disabled={!wards.length}
                    className="mb-2 form-control mt-2"
                >
                    <option value="">Chọn phường xã</option>
                    {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                            {ward.name}
                        </option>
                    ))}
                </select>
            </div>

            <h2 id="result">{result}</h2>
        </div>
    );
};

export default LocationSelector;
