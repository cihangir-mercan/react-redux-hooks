import {getFCP, getTTFB} from "web-vitals";
import axios from "axios";

export function sendPerformanceAnalytics() {
    let fcp;
    let ttfb;
    getFCP((fcpEntry) => {
        fcp = fcpEntry.value;
        getTTFB((ttfbEntry) => {
            ttfb = ttfbEntry.value;

            const domLoad = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
            const windowLoad = window.performance.timing.domComplete - window.performance.timing.navigationStart;

            let networkTimings = [];
            window.performance.getEntriesByType('resource').forEach((item) => {
                networkTimings.push({
                    name: item.name,
                    duration: item.duration
                })
            })

            // Send a POST request
            const API_URL = "https://perfanalytics-backend.herokuapp.com/analytics";
            axios({
                method: 'post',
                url: API_URL,
                data: {
                    "ttfb": ttfb,
                    "fcp": fcp,
                    "domLoad": domLoad,
                    "windowLoad": windowLoad,
                    "networkTimings": networkTimings
                }
            }).then((res) => {
                console.log("performance analytics are send to the api")
            }).catch((err) => {
                console.log("error while sending performance analytics to the api")
            });
        })
    })
}


