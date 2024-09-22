"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Utils_1 = require("./Utils");
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors")); //npm install --save-dev @types/cors
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const data = fs_1.default.readFileSync(path_1.default.join(__dirname, 'config.json'), { encoding: 'utf8', flag: 'r' });
const config = JSON.parse(data);
const mongoUri = config.connection;
// Middleware
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use('/api', UserRoutes_1.default);
app.get('/', (req, res) => {
    res.send(Utils_1.Utils.add(1, 2) + "");
});
mongoose_1.default.connect(mongoUri)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
// app.listen(port, () => {
//       console.log(`Server is running ${port}`);
// });
