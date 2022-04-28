const handleScroll = () => {
  const sections = document.querySelectorAll(`.section`);

  for (let i = sections.length - 1; i >= 0; i--) {
    let distance = sections[i].offsetTop - 160;

    if (window.pageYOffset >= distance) {
      document.querySelectorAll(".current, li > ul.show")
        .forEach(item => item.classList.remove("current", "show"));

      let navItem = document.querySelector(`li[data-section='${sections[i].id}']`);

      if (navItem) {
        let subList = navItem.closest(".subitems") || navItem.querySelector(".subitems");
        if (subList) subList.classList.add("show");
        navItem.classList.add("current");
      }
      break;
    }
  }
}

export default handleScroll;