import React from "react";
import '../../style/Main/style.scss';
import vnTopo from '../../geo_data/map.geojson';
import hs from '../../geo_data/Hoangsa.json';
import ts from '../../geo_data/Truongsa.json';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';

const vietnam = [vnTopo, hs, ts];

const ArticleMap = ({ setName }) => {
    // const [zoomLevel, setZoomLevel] = useState(1);
    // const [center, setCenter] = useState([104, 17]);

    // useEffect(() => {
    //     setCenter([104, 17]);
    // }, [zoomLevel]);

    // const onClick = useCallback((geo) => {
    //     setZoomLevel(2);
    //     setCenter([geo.centroid[0], geo.centroid[1]]);
    //     setName(`${geo.properties.name}`);
    // }, []);
    return (

        <article className="col-6">
            <div className="map">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 2500,
                        center: [110, 15] // coordinate of VietNam [long, lat]
                    }}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                >
                    {/* center={[104, 17]} */}

                    <ZoomableGroup center={[106, 17]} maxZoom={20}  >
                        {vietnam.map((geoUrl) => (
                            <Geographies key={geoUrl} geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onClick={() => {
                                                setName(`${geo.properties.name}`)
                                            }}
                                            onMouseLeave={() => {

                                            }}
                                            style={{
                                                default: {
                                                    fill: geo.properties.color,
                                                    stroke: '#212529',
                                                    strokeWidth: 0.01,
                                                    outline: 'none',
                                                },
                                                hover: {
                                                    fill: '#e6dfd9',
                                                    stroke: '#212529',
                                                    strokeWidth: 0.01,
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                        ))}
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </article>
    )
}



export default ArticleMap;