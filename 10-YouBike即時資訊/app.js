const bikeApi =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
const siteList = document.querySelector(".siteList");
const searchInput = document.querySelector("#searchKeyword");

// pervent form default event
document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = searchInput.value;
  sendKeywordHandler(keyword);
});

function sendKeywordHandler(keyword) {
  if (keyword.trim() === "") {
    searchInput.style.outline = "3px solid red";
    searchInput.focus();
  } else {
    siteList.textContent = "";
    getUBikeData(bikeApi, keyword);
  }
}

// fetch and parse data
async function getUBikeData(url, keyword) {
  const res = await fetch(url);
  const rawData = await res.json();

  const parseData = rawData.filter((data) => data.ar.includes(keyword));

  if (parseData.length === 0) {
    let newList = `
        <li class="list-group-item fs-5">
            找不到資訊
        </li>
    `;
    siteList.insertAdjacentHTML("beforeend", newList);
  }

  parseData.forEach((d) => {
    let { ar: address, sna: stationName, sbi: bikeNumber } = d;

    let newList = `
        <li class="list-group-item fs-5">
            <i class="fas fa-bicycle"></i>
            ${stationName.replace("YouBike2.0_", "")} (${bikeNumber})<br />
            <small class="text-muted">${address}</small>
        </li>
    `;

    siteList.insertAdjacentHTML("beforeend", newList);
  });
}

// remove input outline
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
  } else if (e.key !== "Enter") {
    e.target.style.outline = "none";
  }
});

searchInput.addEventListener("blur", (e) => {
  e.target.style.outline = "none";
});
