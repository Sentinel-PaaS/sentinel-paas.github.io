const scrollToElement = (elementId, offsetAmt) => {
  let element = document.getElementById(elementId);
  if (!element) return;

  let y = element.getBoundingClientRect().top + window.pageYOffset + offsetAmt;
  window.scrollTo({ top: y, behavior: "auto" });
}


export default scrollToElement;