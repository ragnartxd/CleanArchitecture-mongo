import { Router } from "express";

export default function currencyRoutes(controller) {
  const router = Router();

  router.post("/currencies", (req, res) => controller.create(req, res));
  router.get("/currencies", (req, res) => controller.getAll(req, res));

  return router;
}
