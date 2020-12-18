import axios from "axios";
import {getPerformanceAnalytics} from "./utils/PerfAnalytics";

const reportWebVitals = () => {
    window.addEventListener('load', () => {

        const analytics = getPerformanceAnalytics();

        // Send a POST request
        const API_URL = "https://perfanalytics-backend.herokuapp.com/analytics";
        axios({
            method: 'post',
            url: API_URL,
            data: {
                "ttfb": analytics.ttfb,
                "fcp": analytics.fcp,
                "domLoad": analytics.domLoad,
                "windowLoad": analytics.windowLoad,
                "networkTimings": analytics.networkTimings
            }
        }).then((res) => {
            console.log("performance analytics are send to the api")
        }).catch((err) => {
            console.log("error while sending performance analytics to the api")
        });
    });
};

export default reportWebVitals;