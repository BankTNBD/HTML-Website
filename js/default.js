let darkTheme = false;


function darkModeToggle() {
    darkTheme = document.querySelector('.darkMode:checked');
    let root = document.querySelector(':root');
    let darkicon = document.querySelector('#dark-icon');
    let lighticon = document.querySelector('#light-icon');
    if(darkTheme)
    {
        root.style.setProperty('--background-color',  'black');
        root.style.setProperty('--font-color', 'white');
        darkicon.style.setProperty('display', 'block');
        lighticon.style.setProperty('display', 'none');

    } else
    {
        root.style.setProperty('--background-color',  'white');
        root.style.setProperty('--font-color', 'black');
        darkicon.style.setProperty('display', 'none');
        lighticon.style.setProperty('display', 'block');
    }
}