import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getLocations } from "../../../async";
import Layout from "../../shared/Layout/Layout"
import ThemedDataGrid from "../../shared/ThemedDataGrid/ThemedDataGrid";


const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);

    const refetch = false;

    useEffect(() => {
        setLoading(true);
        getLocations().then(locationRes => {
            const locationsArray = locationRes.data;
            setLocations(locationsArray)
            setLoading(false);
        })
        // catch error
        
    }, [refetch]);

    return (
        <Layout currentMenuId={2}>
            
            {!loading && (
                    <ThemedDataGrid headingText={'All Locations'} dataArray={locations.map(loc => ({ ...loc, text: loc.name}))} />
                )
            }
            {
                loading && (
                    <Typography> LOADING... </Typography>
                )
            }
        </Layout>
    )
}

export default Locations;