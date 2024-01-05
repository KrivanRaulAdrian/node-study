const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Raul Krivan",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "nodejslogo.png"));
}

function postMessage(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
