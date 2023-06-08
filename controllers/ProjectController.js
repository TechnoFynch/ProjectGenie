const project = require("../models/Project");

const index = async (req, res) => {
  try {
    const projects = await Project.find();

    if (projects?.length > 0 ?? false) {
      res.status(200).send({ projects });
    } else {
      res.status(200).send({ msg: "No projects to show!" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong." });
  }
};

module.exports = {
  index,
};
