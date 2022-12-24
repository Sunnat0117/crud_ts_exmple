import express from "express";
import TodoValidation from "../validation/index";
import Middleware from "../middleware/index";
import TodoController from "../controller/index";

const router = express.Router();

router.post(
  "/create",
  TodoValidation.checkCreateTodo(),
  Middleware.handlerValidationError,
  TodoController.create
);

router.get(
  "/",
  TodoValidation.checkReadTodo(),
  Middleware.handlerValidationError,
  TodoController.getAll
);

router.get(
  "/getOne/:id",
  TodoValidation.checkParam(),
  Middleware.handlerValidationError,
  TodoController.getById
);

router.put(
  "/update/:id",
  TodoValidation.checkParam,
  Middleware.handlerValidationError,
  TodoController.update
);

router.delete(
  "/update/:id",
  TodoValidation.checkParam,
  Middleware.handlerValidationError,
  TodoController.delete
);

export default router;
