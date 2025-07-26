//event delegation work on principal of event bubling. Inspite of adding event to each category we can add to parent so
//that we can add catergory dynamically and we can change logic at a single place. this consume less memory consuption.
document.getElementById("electronic").addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});
