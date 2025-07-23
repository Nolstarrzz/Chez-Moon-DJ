export function loadContactUspage() {
    let allContent = document.getElementById('app')

    //navbar
    let navbar = document.createElement('div')
    navbar.className = 'navbar contactpage';
    navbar.innerHTML =
    `<ul>
    <li><a href="#" class="home-page">Home</a></li>
    <li><a href="#"class="contact-page">Contact Us</a></li>
    <li><a href="#" class="aboutus-page">About Us</a></li>
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
    body.innerHTML = `<body class="contact-page">

  <div class="contact-section">
    <h1>Contact Us</h1>
    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>

    <div class="contact-info">
      <div class="contact-box">
        <i class="fas fa-map-marker-alt"></i>
        <h3>ADDRESS</h3>
        <p>27 13 Lowe Haven</p>
      </div>
      <div class="contact-box">
        <i class="fas fa-phone-alt"></i>
        <h3>PHONE</h3>
        <p>111 343 43 43</p>
      </div>
      <div class="contact-box">
        <i class="fas fa-file-alt"></i>
        <h3>EMAIL</h3>
        <p>business@info.com</p>
      </div>
    </div>
  </div>

</body>`
    allContent.appendChild(body)
}