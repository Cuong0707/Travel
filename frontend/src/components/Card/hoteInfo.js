import React from "react";

const hotelInfo = (hotelInfo) => {
    return (
        <div className="hotel-info">
          {Object.entries(hotelInfo).map(([key, value]) => (
            <div key={key} className="info-item">
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
      );

};

export default hotelInfo;