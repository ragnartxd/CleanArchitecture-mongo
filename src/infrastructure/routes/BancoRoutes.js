import { Router } from "express";

export default function bancoRoutes(controller) {
  const router = Router();

  router.post("/banks", (req, res) => controller.create(req, res));
  router.get("/banks",  (req, res) => controller.getAll(req, res));

  return router;
}