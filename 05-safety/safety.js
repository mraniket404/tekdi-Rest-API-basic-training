// REST API - Safety
// Safe HTTP methods: GET, HEAD, OPTIONS, TRACE

const API_URL = "https://api.example.com/users";

// 1. GET - Retrieve data
async function getUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    console.log("Users:", users);
}

// 2. HEAD - Retrieve response headers
async function checkHeaders() {
    const response = await fetch(API_URL, {
        method: "HEAD"
    });

    console.log("Status:", response.status);
    console.log("Content-Type:", response.headers.get("content-type"));
}

// 3. OPTIONS - Check supported methods
async function checkOptions() {
    const response = await fetch(API_URL, {
        method: "OPTIONS"
    });

    console.log("Status:", response.status);
    console.log("Allowed Methods:", response.headers.get("allow"));
}

// Safe methods should not modify server resources.
// GET, HEAD, OPTIONS and TRACE are considered safe.

// Unsafe methods generally modify resources:
// POST   -> Create
// PUT    -> Replace
// PATCH  -> Update
// DELETE -> Delete

getUsers();