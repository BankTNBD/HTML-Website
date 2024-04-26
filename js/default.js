if(localStorage.getItem("theme") == null)
{
    localStorage.setItem("theme", 'light');
    document.querySelector('.darkMode').checked = false; 
}


let root = document.querySelector(':root');
let darkicon = document.querySelector('#dark-icon');
let lighticon = document.querySelector('#light-icon');
if(localStorage.theme == 'dark')
{
    document.querySelector('.darkMode').checked = true;
    root.style.setProperty('--background-color',  'black');
    root.style.setProperty('--font-color', 'white');
    darkicon.style.setProperty('display', 'block');
    lighticon.style.setProperty('display', 'none');
    localStorage.theme = 'dark';
} else
{
    document.querySelector('.darkMode').checked = false; 
    root.style.setProperty('--background-color',  'white');
    root.style.setProperty('--font-color', 'black');
    darkicon.style.setProperty('display', 'none');
    lighticon.style.setProperty('display', 'block');
    localStorage.theme = 'light';
}

function darkModeToggle()
{
    if(localStorage.theme == 'light')
    {
        root.style.setProperty('--background-color',  'black');
        root.style.setProperty('--font-color', 'white');
        darkicon.style.setProperty('display', 'block');
        lighticon.style.setProperty('display', 'none');
        localStorage.theme = 'dark';
    } else
    {
        root.style.setProperty('--background-color',  'white');
        root.style.setProperty('--font-color', 'black');
        darkicon.style.setProperty('display', 'none');
        lighticon.style.setProperty('display', 'block');
        localStorage.theme = 'light';
    }
}