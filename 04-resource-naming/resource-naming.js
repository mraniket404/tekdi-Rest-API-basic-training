// REST API - Resource Naming
// Collection and Individual Resource Examples

// 1. Collection Resource
// GET /users
console.log("GET /users");

// 2. Specific Resource
// GET /users/1234
console.log("GET /users/1234");

// 3. Create a Customer
// POST /customers
console.log("POST /customers");

// 4. Read a Customer
// GET /customers/33245
console.log("GET /customers/33245");

// 5. Update a Customer
// PUT /customers/33245
console.log("PUT /customers/33245");

// 6. Delete a Customer
// DELETE /customers/33245
console.log("DELETE /customers/33245");

// 7. Product Collection
// GET /products
console.log("GET /products");

// 8. Specific Product
// GET /products/66432
console.log("GET /products/66432");

// 9. Create an Order for a Customer
// POST /customers/33245/orders
console.log("POST /customers/33245/orders");

// 10. Get All Orders of a Customer
// GET /customers/33245/orders
console.log("GET /customers/33245/orders");

// 11. Get a Specific Order
// GET /customers/33245/orders/8769
console.log("GET /customers/33245/orders/8769");

// 12. Add Line Item to an Order
// POST /customers/33245/orders/8769/lineitems
console.log("POST /customers/33245/orders/8769/lineitems");

// 13. Get All Line Items
// GET /customers/33245/orders/8769/lineitems
console.log("GET /customers/33245/orders/8769/lineitems");

// 14. Get a Specific Line Item
// GET /customers/33245/orders/8769/lineitems/1
console.log("GET /customers/33245/orders/8769/lineitems/1");

// REST Resource Naming Rules
const rules = [
  "Use nouns instead of verbs",
  "Use plural names for collections",
  "Use IDs for individual resources",
  "Keep URLs predictable",
  "Use hierarchical URLs for relationships",
];

console.log("\nREST Resource Naming Rules:");

rules.forEach((rule, index) => {
  console.log(`${index + 1}. ${rule}`);
});