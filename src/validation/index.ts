import {body, query} from 'express-validator'

class TodoValidation{
    checkCreateTodo(){
        return[
            body('id')
            .optional()
            .isUUID(4)
            .withMessage('The id should be uuid'),
            body('title')
            .notEmpty()
            .withMessage('The title should be required'),
            body("comleted")
            .optional()
            .isBoolean()
            .withMessage('The message should not be empty')
        ]
    }

    checkReadTodo(){
        return[
            query('limit')
            .optional()
            .isInt({min : 1 , max : 10})
            .withMessage('The value should be number and between 1-10'),
            query('offset')
            .optional()
            .isNumeric()
            .withMessage('The value should be number ')
        ]
    }

    
    checkParam(){
        return[
            query('id')
            .notEmpty()
            .withMessage('The value should not be empty')
            .isUUID(4)
            .withMessage('The value should be uuid ')
        ]
    }


}

export default new TodoValidation()