
//  Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function openDistrict(evt, btnName){
    var tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", " ");
    }

    document.getElementById(btnName).style.display = "block";
    evt.currentTarget.className += " active";
}


// open navigation bar
function myNavigationBar(){
    var y = document.getElementsByClassName('overlay');
    for(let i = 0; i < y.length; i++){
        y[i].addEventListener('click', function(){
            this.classList.toggle('active');
           var showMenu = this.nextElementSibling;
            if(showMenu.style.display === 'block'){
                showMenu.style.display = 'none';
            } else{
                showMenu.style.display = 'block';
            }
        })
    }
}

// close navigation bar
function closeNav(){
    document.getElementById("myNavigationBar").style.width = "0%";
}

 var x = document.getElementById("myDropdown");
     x.onclick = myFunction;

function myFunction() {
    x.classList.toggle("show");
}


// toggle dropdown menu when user click the dropdown menu.
var adc, panel;
    adc = document.getElementsByClassName("myDropdown");
    for(let i = 0; i < adc.length; i++)
        adc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        panel = this.nextElementSibling;
    if(panel.style.display === "block"){
        panel.style.display = "none";
    } else{
        panel.style.display = "block";
    }
});

// toggle the menu bar
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() { 
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
    }
