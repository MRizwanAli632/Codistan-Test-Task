import express from "express";
const Router = express.Router();
import { getParents, getChildren } from "../controllers/parentController.js"

Router.route('/parents').get(getParents);  // Route to fetch the parent data
Router.route('/parents/:parentId/children').get(getChildren) // Route to fetch the chilren data based on parnet id

export default Router