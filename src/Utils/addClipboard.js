const addClipboard = () => {
  navigator.clipboard.writeText("kosaromerf@gmail.com");
  let clipBtn = document.getElementById("clipBoard");
  clipBtn.innerHTML = " ✔ ";
};

export default addClipboard;
