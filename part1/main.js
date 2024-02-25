const selectBtn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");
selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});
let selectedMonths = [];

items.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("checked");
    let checked = document.querySelectorAll(".checked"),
      btn = document.querySelector(".btn-text");
      checked && checked.length > 0
      ? (btn.innerText = `${checked.length} Selected`)
      : (btn.innerText = "Select Month"),
      selectedMonths.includes(elem.lastElementChild.innerText)
        ? selectedMonths.splice(
            selectedMonths.indexOf(elem.lastElementChild.innerText),
            1
          )
        : selectedMonths.push(elem.lastElementChild.innerText),
      (document.getElementById("months").value = selectedMonths);
  });
});
