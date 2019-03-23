export const useLineHelper = () => {
  if (!process.browser) {
    return;
  }
  if (localStorage.getItem("lnHelper")) {
    document.documentElement.classList.add("ln__helper")
  } else {
    document.documentElement.classList.remove("ln__helper")
  }
}
