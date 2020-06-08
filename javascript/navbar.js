var navbar = document.getElementById('navbar')
var style = 'font-family:cursive; width:auto'
navbar.innerHTML = `
      <div class="brand h4 m-3 text-light" style=${style}>Sleek Codes</div>
      <nav class="d-flex w-auto">
        <a href="index.html" class="p-3 pl-5 pr-5">Home  <i class="fa fa-home"> </i> </a>
        <a href="graphics.html" class="p-3 pl-5 pr-5">Graphics </a>
        <a href="website.html" class="p-3 pl-5 pr-5">Website </a>
        <a href="gallery.html" class="p-3 pl-5 pr-5">Gallery </a>
        <a href="pricing.html" class="p-3 pl-5 pr-5">Pricing </a> 
        <a href="Contact.html" class="p-3 pl-5 pr-5">Contact </a>
        <a href="about.html" class="p-3 pl-5 pr-5">About Us </a> 
      </nav>
     <div class="bars text-right pt-3 pl-md-2 pl-sm-2" style='cursor:pointer;'>
      <div class='menu' onclick='menu()'> 
        <div class='bg-light m-1'></div><div class='bg-light m-1'></div><div class='bg-light m-1'></div>
      </div>
      <style>
        .menu div {width:25px; height:3px;}
        @media screen and (max-width:992px){
          .brand {
            font-size:20px;
            // width:auto;
          }
        }
      </style>
    </div>
`