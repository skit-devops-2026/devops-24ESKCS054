const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const client = require("prom-client");

dotenv.config();

const app = express();

const connectDB = require("./config/db");
const authRouter = require("./routes/authRouter");
const createAdmin = require("./utils/createAdmin");
const categoryRouter = require("./routes/categoryRouter");
const serviceRouter = require("./routes/serviceRouter");
const userRouter = require("./routes/userRouter");

// Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.use(cors());
app.use(express.json());

connectDB().then(() => {
    createAdmin();
});

app.use("/uploads", express.static(
    path.join(__dirname, "uploads")
));

app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/service", serviceRouter);
app.use("/api/user", userRouter);

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Running on port", process.env.PORT || 5000);
});