let gitUrl = "https://api.github.com/users/";
let wikiUrl =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

let gitSearcher = document.getElementById("gitSearcher");
let wikiSearcher = document.getElementById("wikiSearcher");

let gitInfo = document.getElementById("gitInfo");
let wikiInfo = document.getElementById("wikiInfo");

gitSearcher.addEventListener("keyup", (e) => {
  let url = `https://api.github.com/users/${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let user = `   
      <div class="authCard">
      <div class="authAva">
        <img class="authImg" src="${data.avatar_url}" alt="???" />
        <h3 class="authNickName">${data.login}</h3>
      </div>
      <div class="authInfo">
        <div class="info_left">
          <h2 class="authName">${data.name}</h2>
          <div class="profileFollow">
            <div class="following">
              <img />
              following: <strong>${data.following}</strong>
            </div>
            <div class="followers">
              <img />
              followers: <strong>${data.followers}</strong>
            </div>
          </div>
        </div>
        <div class="reaching">
          <div class="linkedIn">
            <h4>Public repos: ${data.public_repos}</h4>
          </div>
        </div>
      </div>
    </div>`;

      gitInfo.innerHTML = user;
    });
});
wikiSearcher.addEventListener("keyup", (e) => {
  let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let searchResult = data.query.search;
      let res = ``;
      searchResult.forEach((element) => {
        res += `
        <div class="wikiResult">
          <p class="wikiName"> <strong>Name:</strong> ${element.title}</p> <br />
          <p class="wikiDescription"><strong>Description:</strong> ${element.snippet}</p>
        </div>`;
      });

      wikiInfo.innerHTML = res;
    });
});

wikiSearcher.addEventListener("keyup", () => {});
