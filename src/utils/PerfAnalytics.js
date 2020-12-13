import axios from "axios";

export function sendPerformanceAnalytics() {
    window.addEventListener('load', () => {
        const ttfb = window.performance.timing.responseStart - window.performance.timing.requestStart;
        const domLoad = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const windowLoad = window.performance.timing.domComplete - window.performance.timing.navigationStart;
        const networkTimings = [];
        window.performance.getEntriesByType('resource').forEach((item) => {
            networkTimings.push({
                name: item.name,
                duration: item.duration
            })
        })

        let fcp = 0;
        let performanceEntries = performance.getEntriesByType('paint');
        performanceEntries.forEach((performanceEntry, i, entries) => {
            if (performanceEntry.name === "first-contentful-paint") {
                fcp = performanceEntry.startTime;
            }
        });

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
    });
}