//mobile navigation
const navlinks = document.querySelector('.nav-links');
const menubtn = document.querySelector('.menubtn');
const menubtncloseOpen = document.getElementById("menu_close_open");

const app = () => 
{

    menubtn.addEventListener('click', () => 
    {
        navlinks.classList.toggle('nav-active');
        menubtn.classList.toggle("active");
    });

}

app();


document.addEventListener("click",function(e)
{
    if(e.target.closest("li"))
    {
     navlinks.classList.toggle('nav-active');
    }
});


//Dark Mode
function ModeChange()
{
    const element = document.body;
    element.classList.toggle("dark_mode_content");
}
