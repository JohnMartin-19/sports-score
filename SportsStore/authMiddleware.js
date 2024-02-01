const jwt = require("jsonwebtoken");
const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

const mappings = {
  get:["/api/orders","/orders"],
  post: ["/api/products", "/products","/api/categories","/categories"]
}
