"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TodoValidation {
    checkCreateTodo() {
        return [
            (0, express_validator_1.body)('id')
                .optional()
                .isUUID(4)
                .withMessage('The id should be uuid'),
            (0, express_validator_1.body)('title')
                .notEmpty()
                .withMessage('The title should be required'),
            (0, express_validator_1.body)("comleted")
                .optional()
                .isBoolean()
                .withMessage('The message should not be empty')
        ];
    }
    checkReadTodo() {
        return [
            (0, express_validator_1.query)('limit')
                .optional()
                .isInt({ min: 1, max: 10 })
                .withMessage('The value should be number and between 1-10'),
            (0, express_validator_1.query)('offset')
                .optional()
                .isNumeric()
                .withMessage('The value should be number ')
        ];
    }
    checkParam() {
        console.log((0, express_validator_1.query)('id'));
        return [
            (0, express_validator_1.query)('id')
                .notEmpty()
                .withMessage('The value should not be empty')
                .isUUID(4)
                .withMessage('The value should be uuid ')
        ];
    }
}
exports.default = new TodoValidation();
