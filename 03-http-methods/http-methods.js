// REST API - HTTP Methods
// POST, GET, PUT, PATCH, DELETE

console.log("=== REST API HTTP METHODS ===");

// ------------------------------------
// 1. POST - Create
// ------------------------------------

const postRequest = {
  method: "POST",
  url: "/customers",
  purpose: "Create a new customer",
  crud: "Create",
  successfulStatus: 201
};

console.log("\n1. POST");
console.log(postRequest);


// ------------------------------------
// 2. GET - Read / Retrieve
// ------------------------------------

const getRequest = {
  method: "GET",
  url: "/customers/12345",
  purpose: "Retrieve a customer",
  crud: "Read",
  successfulStatus: 200
};

console.log("\n2. GET");
console.log(getRequest);


// ------------------------------------
// 3. PUT - Update / Replace
// ------------------------------------

const putRequest = {
  method: "PUT",
  url: "/customers/12345",
  purpose: "Update or replace a customer",
  crud: "Update / Replace",
  successfulStatus: 200
};

console.log("\n3. PUT");
console.log(putRequest);


// ------------------------------------
// 4. PATCH - Update / Modify
// ------------------------------------

const patchRequest = {
  method: "PATCH",
  url: "/customers/12345",
  purpose: "Modify part of a customer resource",
  crud: "Update / Modify",
  successfulStatus: 200
};

console.log("\n4. PATCH");
console.log(patchRequest);


// ------------------------------------
// 5. DELETE - Delete
// ------------------------------------

const deleteRequest = {
  method: "DELETE",
  url: "/customers/12345",
  purpose: "Delete a customer",
  crud: "Delete",
  successfulStatus: 204
};

console.log("\n5. DELETE");
console.log(deleteRequest);


// ------------------------------------
// HTTP Methods Summary
// ------------------------------------

const httpMethods = [
  {
    method: "POST",
    crud: "Create",
    example: "/customers"
  },
  {
    method: "GET",
    crud: "Read",
    example: "/customers/12345"
  },
  {
    method: "PUT",
    crud: "Update / Replace",
    example: "/customers/12345"
  },
  {
    method: "PATCH",
    crud: "Update / Modify",
    example: "/customers/12345"
  },
  {
    method: "DELETE",
    crud: "Delete",
    example: "/customers/12345"
  }
];

console.log("\n=== SUMMARY ===");

httpMethods.forEach((item) => {
  console.log(
    `${item.method} -> ${item.crud} -> ${item.example}`
  );
});