const task = require("../module/taskschema");

const get_tasks = (req, res) => {
  task
    .find({ user_id: req.user.id })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
const put_task = async (req, res) => {
  try {
    let Task = await task.findOne({ _id: req.params.id, user_id: req.user.id });
    if (Task) {
      task
        .updateOne(
          { _id: req.params.id, user_id: req.user.id },
          { $set: req.body },
        )
        .then(() => {
          res.send("updateed task");
        })
        .catch((err) => {
          res.send("this task not avliable");
        });
    } else {
      return res.status(404).send("this task not avliable");
    }
  } catch {
    return res.status(404).send("this task not avliable");
  }
};
const delete_task = (req, res) => {
  try {
    task
      .deleteOne({ _id: req.params.id, user_id: req.user.id })
      .then((resulet) => {
        res.send("deleted task");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch {
    res.send("this task not avliable");
  }
};
const post_task = (req, res) => {
  const user_id = req.user.id;
  const { title, status, description, level, dueDate } = req.body;
  const newTask = new task({
    title,
    description,
    status,
    level,
    dueDate,
    user_id,
  });
  task
    .create(newTask)
    .then(() => {
      res.send(req.body.name);
    })
    .catch((err) => res.send(err));
};

const get_by_level = (req, res) => {
  try {
    task
      .find({ user_id: req.user.id, level: req.params.level })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    res.send(error);
  }
};
const get_sort = (req, res) => {
  try {
    task
      .find({ user_id: req.user.id })
      .sort({ dueDate: 1 })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  } catch (err) {
    res.send(err);
  }
};
const get_search = (req, res) => {
  task
    .find({
      user_id: req.user.id,
      title: { $regex: req.body.search, $options: "i" },
    })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

module.exports = {
  post_task,
  get_tasks,
  put_task,
  delete_task,
  get_by_level,
  get_sort,
  get_search,
};
