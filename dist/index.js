"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(Utils.add(1, 2) + "");
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    const user = yield Utils_1.Utils.getUser(data);
    console.log(JSON.stringify(user.data));
    res.send(JSON.stringify(user.data) + "");
}));
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
