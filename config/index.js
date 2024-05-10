const folders = {
    "controllers": "/api/controllers",
    "models": "/api/models",
    "services": "/api/services",
    "validators": "/api/validators",
    "middleware": "/api/middleware",
    "routes": "/api/routes"
};

const files = [
    "/api/controllers/userController.js",
    "/api/controllers/productController.js",
    "/api/controllers/protectedController.js",
    "/api/models/userModel.js",
    "/api/models/productModel.js",
    "/api/services/userService.js",
    "/api/services/productService.js",
    "/api/services/authService.js",
    "/api/validators/userValidator.js",
    "/api/validators/productValidator.js",
    "/api/middleware/authMiddleware.js",
    "/api/routes/userRoutes.js",
    "/api/routes/productRoutes.js",
    "/api/routes/authRoutes.js",
    "/api/routes/protectedRoutes.js"
];

export default { folders, files };