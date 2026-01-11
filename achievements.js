function toggleDarkMode() { Document.body.classList.toggle("dark"); }
function toggleAchievements() { var section = document.querySelector(".projects");
  if (section.style.display === "none") 
  { section.style.display = "block";} 
  
  else { section.style.display = "none"; } }
function changeTitle() { document.title = "Achievements Updated!"; }
