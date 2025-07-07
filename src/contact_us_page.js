export function loadContactUspage() {
    let allContent = document.getElementById('app')

    //navbar
    let navbar = document.createElement('div')
    navbar.className = 'navbar contactpage';
    navbar.innerHTML =
    `<ul>
    <li><a href="#" class="home-page">Home</a></li>
    <li><a href="#"class="contact-page">Contact Us</a></li>
    <li><a href="#" class="aboutus-page">Menu</a></li>
    </ul>`
    allContent.appendChild(navbar);
    
    //header
    let header = document.createElement('div')
    header.className = 'header contactpage';
    header.innerHTML =`<p class="title">Need Help?</p>`
    allContent.appendChild(header)
    
    //main-part
    let body = document.createElement('div')
    body.className = 'body contactpage'
    body.innerHTML = `<div class="middle">
    <div class="res-shorter">
        <p class="res-title">Ms Drader</p>
        <p class="res-discription">123-456-7890</p>
    </div>
    <div class="res-shorter">
        <p class="res-title">Ms Butler</p>
        <p class="res-discription">123-456-7890</p>
    </div>
    <div class="res-shorter">
        <p class="res-title">Mr Fan</p>
        <p class="res-discription">123-456-7890</p>
    </div>
    </div>`
    allContent.appendChild(body)
}