// REST API - HTTP Status Codes

// Common HTTP Status Codes
const statusCodes = {
    200: "OK",
    201: "Created",
    204: "No Content",

    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",

    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",

    511: "Network Authentication Required"
};

console.log("200:", statusCodes[200]);
console.log("201:", statusCodes[201]);
console.log("404:", statusCodes[404]);
console.log("511:", statusCodes[511]);


// HTTP 511 - Network Authentication Required
async function checkNetworkAccess() {
    try {
        const response = await fetch("https://example.com");

        console.log("Status Code:", response.status);
        console.log("Status Text:", response.statusText);

        if (response.status === 511) {
            console.log("Network Authentication Required");
            console.log(
                "The client needs to authenticate to gain network access."
            );
            console.log(
                "This status is commonly associated with captive portals."
            );
        } else if (response.ok) {
            console.log("Request successful");
        } else {
            console.log("Request failed:", response.status);
        }

    } catch (error) {
        console.error("Request Error:", error.message);
    }
}

checkNetworkAccess();