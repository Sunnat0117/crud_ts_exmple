"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_config_1 = __importDefault(require("./config/database.config"));
const index_1 = __importDefault(require("./route/index"));
database_config_1.default.sync()
    .then(() => {
    console.log('database is connected');
});
const app = (0, express_1.default)();
const port = 9000;
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log('Server is running on 9000');
});
