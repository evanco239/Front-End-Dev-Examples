class UI {
  constructor(res) {
    this.res = res;
  }

  displayDaysOfWeek(res) {
    const tabs = document.querySelector("ul").children;
    const daily = document.querySelector("#daily").children;
    res.dayOfWeek.forEach((day, index) => {
        tabs[index].firstElementChild.innerHTML= `${day}<img src="./PNGs/${res.daypart[0].iconCode[index] || res.daypart[0].iconCode[index+1]}.png" style="padding-left:5px" width=25px>`;
        daily[index].firstElementChild.innerText = day;
    });
  }

  changeTabs(e) {
    console.log(e);
    document.querySelector(".active").classList = "nav-link";
    const day = e.target.innerText;
    let classlist = e.target.className;
    if (classlist.indexOf("active") === -1) {
      e.target.classList = "nav-link active";
    }

    const daily = document.querySelector("#daily").children;

    for (let i = 0; i < 6; i++) {
      if (daily[i].firstElementChild.innerText !== day) {
        daily[i].style.display = "none";
      } else {
        daily[i].style.display = "block";
      }
    }
  }

  createCardContent(res) {
      
      const daily = document.querySelector("#daily").children;

      for (let i = 0; i < 6; i++) {
          const div = `
        <div>${res.validTimeLocal[i].slice(0, 10)}</div>
        <div class="row mb-3">
            <div class="col-md-3" >
                <span style="color:blue; font-size:30px">${res.temperatureMin[i]}</span><span style="font-size:30px; color:grey">|</span><span style="color:red; font-size:30px">${res.temperatureMax[0] || res.temperatureMax[1]}</span>
            </div>
            <div class="col-md-5 pt-4" >
                <span style="font-size:16px">${res.narrative[i]}</span>
            </div>
            <div class="col-md-4 pt-1" >
            <img src="./PNGs/${res.daypart[0].iconCode[i] || res.daypart[0].iconCode[i+1]}.png" width=75px>
            </div>
        </div>
      `
          daily[i].innerHTML += div;
      }

      
  }
}
