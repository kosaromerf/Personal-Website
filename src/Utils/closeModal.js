const closeModal = () => {
  const closeBtn = document.querySelectorAll(".closeBtn");
  const modal = document.querySelectorAll(".modal");
  console.log("s");
  console.log(modal);
  console.log(closeBtn);

  modal.forEach((e) => {
    e.style.display = "none";
  });
};

export default closeModal;
