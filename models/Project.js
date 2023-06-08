const mongoose = require("mongoose");
const slugPlugin = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
      unique: true,
    },
    contact: {
      type: String,
      required: true,
      max: 10,
      min: 10,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDesc: {
      type: String,
      required: true,
    },
    projectCategory: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
    },
    projectStatus: {
      type: String,
      default: "submitted",
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
  },
  { timestamps: true }
);

ProjectSchema.plugin(slugPlugin);

module.exports = Project = mongoose.model("Project", ProjectSchema);
