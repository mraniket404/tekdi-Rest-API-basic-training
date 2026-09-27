// ==========================================
// REST API Tutorial - 02
// The Six Constraints of REST
// ==========================================

// REST (REpresentational State Transfer)
// is an architectural style for designing
// distributed systems and APIs.

// REST defines six architectural constraints:
//
// 1. Uniform Interface
// 2. Stateless
// 3. Cacheable
// 4. Client-Server
// 5. Layered System
// 6. Code on Demand (Optional)


// ==========================================
// 1. UNIFORM INTERFACE
// ==========================================

// Client and server communicate through
// a consistent and predictable interface.

// Example resource:
const userUrl = "/users/101";

console.log("Resource:", userUrl);

// HTTP methods give meaning to the request:
//
// GET    -> Read
// POST   -> Create
// PUT    -> Replace
// PATCH  -> Partially update
// DELETE -> Delete

console.log("GET    /users/101");
console.log("POST   /users");
console.log("PUT    /users/101");
console.log("PATCH  /users/101");
console.log("DELETE /users/101");


// ------------------------------------------
// Uniform Interface Principles
// ------------------------------------------

// Resource-Based
// Resources are identified using URLs/URIs.

const productResource = "/products/501";

console.log("Product Resource:", productResource);


// Manipulation Through Representations
// A client can send a representation of a
// resource to modify it.

const updatedUser = {
    "name": "Aniket",
    "age": 22
};

console.log("Updated User:", updatedUser);


// Self-Descriptive Messages
// Request/response should contain enough
// information to understand how to process it.

const response = {
    "status": 200,
    "contentType": "application/json",
    "data": {
        "name": "Aniket"
    }
};

console.log("Response:", response);


// HATEOAS
// Hypermedia as the Engine of Application State.
//
// APIs can provide links to related resources.

const userResponse = {
    "id": 101,
    "name": "Aniket",
    "links": {
        "self": "/users/101",
        "orders": "/users/101/orders"
    }
};

console.log("HATEOAS Example:", userResponse);


// ==========================================
// 2. STATELESS
// ==========================================

// Every request should contain the information
// required by the server to process that request.
//
// The server does not depend on previous
// requests to understand the current request.

const request = {
    "method": "GET",
    "url": "/users/101",
    "headers": {
        "Authorization": "Bearer token"
    }
};

console.log("Stateless Request:", request);

// The required authentication information
// is sent with the request itself.


// ==========================================
// 3. CACHEABLE
// ==========================================

// REST responses should indicate whether
// they can be cached or not.
//
// Caching can reduce unnecessary requests
// and improve performance.

const cacheResponse = {
    "status": 200,
    "cacheControl": "max-age=3600",
    "data": {
        "name": "Aniket"
    }
};

console.log("Cacheable Response:", cacheResponse);


// ==========================================
// 4. CLIENT-SERVER
// ==========================================

// Client and server have separate responsibilities.
//
// Client:
// - User interface
// - User interaction
// - Sends requests
//
// Server:
// - Business logic
// - Database
// - Processes requests
// - Sends responses

const clientRequest = {
    "method": "GET",
    "url": "/users"
};

const serverResponse = {
    "status": 200,
    "data": [
        {
            "id": 1,
            "name": "Aniket"
        },
        {
            "id": 2,
            "name": "Sakshi"
        }
    ]
};

console.log("Client Request:", clientRequest);
console.log("Server Response:", serverResponse);


// ==========================================
// 5. LAYERED SYSTEM
// ==========================================

// A REST system can contain multiple layers
// between the client and the actual server.
//
// Example:
//
// Client
//   |
//   v
// API Gateway
//   |
//   v
// Load Balancer
//   |
//   v
// Application Server
//   |
//   v
// Database

const architecture = [
    "Client",
    "API Gateway",
    "Load Balancer",
    "Application Server",
    "Database"
];

console.log("Layered System:", architecture);


// ==========================================
// 6. CODE ON DEMAND (OPTIONAL)
// ==========================================

// This is the only optional REST constraint.
//
// A server can send executable code to the client.
//
// Example:
// JavaScript can be sent from a server
// and executed by the browser.

const codeOnDemand = {
    "type": "JavaScript",
    "description": "Server can provide executable code"
};

console.log("Code on Demand:", codeOnDemand);


// ==========================================
// SUMMARY
// ==========================================

const restConstraints = [
    "Uniform Interface",
    "Stateless",
    "Cacheable",
    "Client-Server",
    "Layered System",
    "Code on Demand (Optional)"
];

console.log("\nREST Six Constraints:");
restConstraints.forEach((constraint, index) => {
    console.log(`${index + 1}. ${constraint}`);
});


// ==========================================
// IMPORTANT
// ==========================================
//
// Code on Demand is OPTIONAL.
//
// The other five constraints are required
// for an architecture to strictly conform
// to REST.
//
// REST is an architectural style, not a
// programming language or framework.