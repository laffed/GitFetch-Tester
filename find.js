let retrievedObject;

const searchNode = document.getElementById("searchInput");
searchNode.addEventListener("keyup", function(event) {
  localStorage.clear();
  event.preventDefault();
  if (event.key === "Enter") {
    inputUserName = searchNode.value;
    const searchURL = `https://api.github.com/users/${inputUserName}`;

    async function getUser() {
      let response = await fetch(searchURL);
      let result = await response.json();
      localStorage.setItem("resultProfile", JSON.stringify(result));
      console.log("result", result);
      retrievedObject = JSON.parse(localStorage.getItem("resultProfile"));

      if (result.message != "Not Found") {
        setTimeout(() => {
          window.open("index.html", "_self");
        }, 300);
      } else {
        document.getElementById("searchInput").value = "Profile Doesn't Exist";
      }
    }
    fetch(searchURL)
      .then(response => {
        if (response.status !== 200) {
          document.getElementById("searchInput").value =
            "Profile Doesn't Exist";
          return;
        } else {
          getUser();
        }
      })
      .catch(() => {
        return;
      });
  }
});
