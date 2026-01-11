function toggleDarkMode() {document.body.classList.toggle("dark");}

var text = "Hi I am Hridhaan and I like space and tech. I enjoy making new and different projects. As a student still learning and growing, I like connecting with people who share similar interests. I also share what I learn on my LinkedIn and YouTube (@Astro2HR).";
var index = 0; function typeText() {
if (index < text.length) { document.getElementById("typing-text").innerHTML += text.charAt(index);
index++;
setTimeout(typeText, 40);
}}

typeText();

