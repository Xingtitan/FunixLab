const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");

// Ko cần dùng thư viện bodyParse vì đã tích hợp vào express
// const bodyParser = require("body-parser");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
