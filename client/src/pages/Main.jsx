import { useState, Suspense } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Emails from "../components/Emails";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";

const Main = function(){
    const [openDrawer, setOpenDrawer] = useState(true);
    const toggleDrawer = function(){
        setOpenDrawer(prevState => !prevState);
    }
    return( 
    <>
        <Header toggleDrawer={toggleDrawer}/>
        <Box>
            <SideBar openDrawer={openDrawer}/>
            <Suspense fallback={<SuspenseLoader />}>
                <Outlet context={{openDrawer}}/>
            </Suspense>
        </Box>
    </>
    )
}

export default Main;