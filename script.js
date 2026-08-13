const videoDialog = document.querySelector(".video-dialog");
const videoDialogTitle = document.querySelector("#video-dialog-title");
const videoDialogClose = document.querySelector(".video-dialog-close");

document.querySelectorAll(".video-preview").forEach((preview) => {
  preview.addEventListener("click", () => {
    if (!videoDialog || !videoDialogTitle) return;
    videoDialogTitle.textContent = preview.dataset.videoTitle || "Sample interview";
    videoDialog.hidden = false;
    document.body.style.overflow = "hidden";
    videoDialogClose?.focus();
  });
});

const closeVideoDialog = () => {
  if (!videoDialog) return;
  videoDialog.hidden = true;
  document.body.style.overflow = "";
};

videoDialogClose?.addEventListener("click", closeVideoDialog);
videoDialog?.addEventListener("click", (event) => {
  if (event.target === videoDialog) closeVideoDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoDialog && !videoDialog.hidden) {
    closeVideoDialog();
  }
});

document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", () => {
    const isAdded = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isAdded));
    button.textContent = isAdded ? "Add to wishlist" : "Added to wishlist";
  });
});
