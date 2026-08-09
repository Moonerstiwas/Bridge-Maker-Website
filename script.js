const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  if (!button) return;

  button.textContent = "Interest saved";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Send interest";
    button.disabled = false;
    form.reset();
  }, 1800);
});

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
    button.textContent = "Added to demo cart";
    button.disabled = true;
  });
});
