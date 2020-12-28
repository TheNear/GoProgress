const app = require("express")();
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});


app.listen(8080, () => {
  console.log("Server is listen on porn 8080!");
});
