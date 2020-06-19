//impementing this way is called unobtrusive javascript, no library dependance - html should focus on presentation
window.onload = function() //waits for page to load first
{
    var homeLink = document.getElementById("home"); //ref to link on the page with id of mylink
    
    homeLink.onclick = function testOne()
    {
        contactLink.scrollIntoView();
    }

    var projectsLink = document.getElementById("projects");

    projectsLink.onclick = function testTwo()
    {

    }
    
    var contactLink = document.getElementById("contact");

    contactLink.onclick = function testThree()
    {
        alert("it also also worked!");
    }
}