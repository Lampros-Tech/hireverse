import React, { useEffect } from "react";

function useAssignPath(currentPath) {

    useEffect(()=>{
        // const last = window.location.pathname.split('/')[1];
        // console.log('App.js-- '+last);

    },[currentPath])
}

export default useAssignPath;
