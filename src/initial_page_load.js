export function loadpage() {
    let allContent = document.getElementById('app')

    //navbar
    let navbar = document.createElement('div')
    navbar.classList = 'navbar homepage';
    navbar.innerHTML =
    `<ul>
    <li><a href="#" class="home-page">Home</a></li>
    <li><a href="#"class="contact-page">Contact Us</a></li>
    <li><a href="#" class="aboutus-page">About Us</a></li>
    </ul>`
    allContent.appendChild(navbar);
    
    //header
    let header = document.createElement('div')
    header.classList = 'header homepage';
    header.innerHTML =`<p class="title">Chez Moon</p>`
    allContent.appendChild(header)
    
    //main-part
    let body = document.createElement('div')
    body.classList = 'body homepage';
    body.innerHTML = `<div class="middle">
    <div class="res">
        <p class="res-title">Our Story</p>
        <p class="res-discription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, similique soluta nobis eaque quam magnam, beatae sed quo esse animi explicabo? Voluptate beatae hic culpa quia quis iste eveniet unde.</p>
    </div>
    <div class="res">
        <p class="res-title">Hours</p>
        <p class="res-discription">Sunday: 8am - 8pm

        Monday: 6am - 6pm
        
        Tuesday: 6am - 6pm
        
        Wednesday: 6am - 6pm
        
        Thursday: 6am - 10pm
        
        Friday: 6am - 10pm
        
        Saturday: 8am - 10pm</p>
    </div>
    <div class="res">
        <p class="res-title">Location</p>
        <p class="res-discription">123 Real Street Ave</p>
    </div>
    </div>`
    allContent.appendChild(body)

}