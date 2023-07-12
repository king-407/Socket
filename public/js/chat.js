const socket = io();
socket.on("count", (count) => {
  console.log("count updated " + count);
});
document.querySelector("#hi").addEventListener("click", () => {
  console.log("clicked");
  socket.emit("increment");
});
