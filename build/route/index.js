"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../validation/index"));
const index_2 = __importDefault(require("../middleware/index"));
const index_3 = __importDefault(require("../controller/index"));
const router = express_1.default.Router();
router.post("/create", index_1.default.checkCreateTodo(), index_2.default.handlerValidationError, index_3.default.create);
router.get("/", index_1.default.checkReadTodo(), index_2.default.handlerValidationError, index_3.default.getAll);
router.get("/getOne/:id", index_1.default.checkParam(), index_2.default.handlerValidationError, index_3.default.getById);
router.put("/update/:id", index_1.default.checkParam, index_2.default.handlerValidationError, index_3.default.update);
router.delete("/update/:id", index_1.default.checkParam, index_2.default.handlerValidationError, index_3.default.delete);
exports.default = router;
