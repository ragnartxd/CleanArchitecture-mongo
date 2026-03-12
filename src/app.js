import express from "express";
import currencyRoutes from "./infrastructure/routes/MonedaRoutes.js";
import { currencyController} from "./infrastructure/config/container.js";

const app = express();

app.use(express.json());

// Rutas
app.use("/api", currencyRoutes(currencyController));

export default app;
