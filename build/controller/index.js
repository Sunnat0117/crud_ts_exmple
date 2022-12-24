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
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const models_1 = require("../models");
class TodoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            try {
                const record = yield models_1.TodoInstance.create(Object.assign(Object.assign({}, req.body), { id }));
                return res.json({
                    message: "Successfully",
                    data: record
                });
            }
            catch (e) {
                res.json({ msg: "failed", error: e });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield models_1.TodoInstance.findOne({ where: { id } });
                res.json({
                    message: "get successfully",
                    data: result,
                });
            }
            catch (e) {
                res.json({ msg: "failed", error: e });
            }
        });
    }
    getAll(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = (_a = req.query) === null || _a === void 0 ? void 0 : _a.limit;
                const offset = (_b = req.query) === null || _b === void 0 ? void 0 : _b.offset;
                const result = yield models_1.TodoInstance.findAll({ where: {}, limit, offset });
                res.json({
                    message: "All products",
                    data: result,
                });
            }
            catch (e) {
                res.json({ msg: "failed", error: e });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield models_1.TodoInstance.findOne({ where: { id } });
                if (!result) {
                    return res.json({ msg: 'dont found result' });
                }
                const updatedResult = yield result.update({ comleted: !result.getDataValue("comleted") });
                res.json({
                    message: 'get successfully',
                    data: updatedResult
                });
            }
            catch (e) {
                res.json({ msg: 'failed', error: e });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield models_1.TodoInstance.findOne({ where: { id } });
                if (!result) {
                    return res.json({ msg: 'dont found result' });
                }
                const deletedResult = yield result.destroy();
                res.json({
                    message: 'get successfully',
                    data: deletedResult
                });
            }
            catch (e) {
                res.json({ msg: 'failed', error: e });
            }
        });
    }
}
exports.default = new TodoController();
