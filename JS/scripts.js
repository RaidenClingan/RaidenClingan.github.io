// Change Variable
let stylemode = document.cookie;

// Change Variable
let stylelink = document.getElementById('style');

// Conditional Branch with Else Branch
if (stylemode == 'dark') {
    // Change the href property of the 'link'
    stylelink.href = 'CSS/dark.css';
} else {
    stylelink.href = 'CSS/light.css';
    stylemode = 'light'
    document.cookie = 'light';
}

// Common Event
function switchmode() {
    //Conditional Statement with Else Branch
    if (stylemode == 'light') {
        stylemode = 'dark'
    stylelink.href = 'CSS/dark.css';
        document.cookie ='dark';
    } else {
        stylemode = 'light'
    stylelink.href = 'CSS/light.css';
        document.cookie = 'light'
    }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display == 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
}