import React from 'react';
import {useParams} from "react-router-dom";
//HOC для получения параметров из урла
const withRouter = Component => props => {
    const params = useParams();
    return <Component {...props} params={params} /> ;
};

export { withRouter };
