
export function getPerformanceAnalytics() {
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

    return [{"ttfb": ttfb, "fcp": fcp, "domLoad": domLoad, "windowLoad": windowLoad, "networkTimings": networkTimings}];
}

