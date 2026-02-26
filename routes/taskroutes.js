const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/middleware");
const taskController = require("../controllres/taskcontroller");
const { body, validationResult } = require("express-validator");
const task = require("../module/taskschema");

//router.get("*", middleware.checkIfUser);
router.post(
  "/addtask",
  middleware.requireAuth,
  [
    body("title").notEmpty().withMessage("title is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("level")
      .notEmpty()
      .withMessage("level is required")
      .isIn(["easy", "medium", "hard"])
      .withMessage("invalid level"),
    body("status").notEmpty().withMessage("status is required"),
    body("dueDate").notEmpty().withMessage("dueDate is required"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let Errors =errors.array()
      return res.status(400).send(Errors[0].msg);
    }
    next();
  },
  taskController.post_task,
);
router.get("/getalltask", middleware.requireAuth, taskController.get_tasks);
router.delete(
  "/delete/:id",
  middleware.requireAuth,
  taskController.delete_task,
);
router.put("/update/:id", middleware.requireAuth, taskController.put_task);

router.get('/getbylevel/:level',middleware.requireAuth,taskController.get_by_level)

router.get('/gettasksort',middleware.requireAuth,taskController.get_sort)
router.get('/searchtask',middleware.requireAuth,taskController.get_search)



module.exports = router;