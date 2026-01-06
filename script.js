function showToast() {
  const toastContainer = document.getElementById("toast");

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = "This is a toast notification";

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
