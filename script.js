let button = document.getElementById('btn');
let buttontxt = document.getElementById('btn').innerText;
let image = document.querySelector('#image');


function On()
{
    if(buttontxt == "Switch On")
    {
        buttontxt = "Switch Off";
        button.innerText = buttontxt;
        image.setAttribute('src', "Images/Bulb-On.png");
    }
    else
    {
        buttontxt = "Switch On";
        button.innerText = buttontxt;
        image.setAttribute('src', "Images/Bulb-Off.png");
    }
}