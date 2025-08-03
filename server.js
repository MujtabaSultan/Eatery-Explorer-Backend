const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const allowedOrigin = "https://eatery-explorer-frontend.vercel.app";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.options(
  "*",
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
const mongoose = require("mongoose");
const testJWTRouter = require("./controllers/test-jwt");
console.log("app")
const usersRouter = require("./controllers/users");
const profilesRouter = require("./controllers/profiles");
const restaurantsRouter = require("./controllers/restaurants.js");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use("/test-jwt", testJWTRouter);
app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);
app.use("/restaurants", restaurantsRouter);

app.listen(process.env.PORT, () => {
  console.log("The express app is ready!");
});
