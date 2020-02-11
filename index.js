let retrievedObject = JSON.parse(localStorage.getItem("resultProfile"));

function renderPage() {
  //render profile picture
  document.getElementById("prof-img").src = retrievedObject.avatar_url;
  //render Name
  document.getElementById("userActual").innerText = retrievedObject.name;

  //render user handle
  document.getElementById("userHandle").innerText = "@" + retrievedObject.login;
  document.getElementById("userHandle").href = retrievedObject.html_url;
  //render bio
  document.getElementById("userBio").innerHTML = retrievedObject.bio
  //render date joined
  let options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  document.getElementById("dateJoined").innerHTML = retrievedObject.created_at;
  //render repositories integer
  document.getElementById("repos").innerText = retrievedObject.public_repos;
  //render followers integer
  document.getElementById("followers").innerText = retrievedObject.followers;
  //render following integer
  document.getElementById("following").innerText = retrievedObject.following;
}

function toFind() {
  localStorage.clear();
  window.open("find.html", "_self");
}

window.onload = renderPage;