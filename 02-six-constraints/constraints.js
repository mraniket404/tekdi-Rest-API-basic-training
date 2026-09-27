// ==========================================
// REST API - Six Constraints
// ==========================================

// 1. Uniform Interface
// Resources should have a consistent interface.

const userResource = {
  id: 101,
  name: "Aniket",
  city: "Kolhapur"
};

console.log("1. Uniform Interface");
console.log("Resource:", userResource);


// 2. Stateless
// Every request should contain the information
// required by the server to process it.

const request = {
  method: "GET",
  url: "/users/101",
  headers: {
    Authorization: "Bearer example-token"
  }
};

console.log("\n2. Stateless");
console.log("Request:", request);


// 3. Cacheable
// A server can tell the client whether a response
// can be cached.

const responseHeaders = {
  "Cache-Control": "max-age=3600"
};

console.log("\n3. Cacheable");
console.log("Response Headers:", responseHeaders);


// 4. Client-Server
// Client and server have separate responsibilities.

const client = {
  responsibility: "User Interface and sending requests"
};

const server = {
  responsibility: "Business logic and data processing"
};

console.log("\n4. Client-Server");
console.log("Client:", client.responsibility);
console.log("Server:", server.responsibility);


// 5. Layered System
// A request can pass through multiple layers.

const architecture = [
  "Client",
  "API Gateway",
  "Application Server",
  "Database"
];

console.log("\n5. Layered System");
console.log(architecture.join(" -> "));


// 6. Code on Demand
// This is the only optional REST constraint.
// A server can send executable code to a client.

const codeOnDemand = {
  enabled: true,
  example: "JavaScript sent from server to browser"
};

console.log("\n6. Code on Demand");
console.log(codeOnDemand);


// Summary
console.log("\n==========================================");
console.log("REST Six Constraints");
console.log("==========================================");

const constraints = [
  "Uniform Interface",
  "Stateless",
  "Cacheable",
  "Client-Server",
  "Layered System",
  "Code on Demand (Optional)"
];

constraints.forEach((constraint, index) => {
  console.log(`${index + 1}. ${constraint}`);
});