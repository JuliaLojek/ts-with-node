import { Router } from "express";
// common code in node:
// const express = require("express");
// const Router = express.Router;

const router = Router();
router.post("/");
router.get("/");
router.patch("/:id");
router.delete("/:id");

export default router;
