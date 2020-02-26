const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const admin = require("./routes/admin-pro");

const userRoutes = require("./routes/users");
const portfolioRoutes = require("./routes/portfolio");
const blogsRoutes = require("./routes/blogs");
const toolssRoutes = require("./routes/tools");

const path = require("path");
mongoose
  .connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      // const fakeDb = new FakeDb();
      //fakeDb.seedDb();
      console.log("sucsess");
    }
  })
  .catch(err => {
    console.log(err);
  });
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/portfolio", portfolioRoutes);

app.use("/api/v1/blogs", blogsRoutes);
app.use("/api/v1/tools", toolssRoutes);

// Build and use a router which will handle all AdminBro routes

app.use(admin.AdminBro.options.rootPath, admin.router);

if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "..", "build");
  app.use(express.static(appPath));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Running");
});
