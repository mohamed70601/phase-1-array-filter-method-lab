
function findMatching(driversArr, string) {
    const lowerSearch = string.toLowerCase();
    const matchingDrivers = driversArr.filter(driver =>
        driver.toLowerCase().includes(lowerSearch)
    );
    return matchingDrivers;
}

function fuzzyMatch(driversArr, string) {
    const lowerSearch = string.toLowerCase();
    const matchingDrivers = driversArr.filter(driver =>
        driver.toLowerCase().startsWith(lowerSearch)
    );
    return matchingDrivers;
}

function matchName(driversArr, string) {
    const matchingDrivers = driversArr.filter(driver => driver.name === string);
    return matchingDrivers;
}