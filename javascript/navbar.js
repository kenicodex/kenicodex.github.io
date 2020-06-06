var navbar = document.getElementById('navbar')
var style = 'font-family:cursive; width:auto'
navbar.innerHTML = `
      <div class="brand h4 m-3" style=${style}>Sleek Codes</div>
      <nav class="d-flex w-auto">
        <a href="index.html" class="p-3 pl-5 pr-5">Home  <i class="fa fa-home"> </i> </a>
        <a href="graphics.html" class="p-3 pl-5 pr-5">Graphics </i> </a>
        <a href="website.html" class="p-3 pl-5 pr-5">Website </i> </a>
        <a href="gallery.html" class="p-3 pl-5 pr-5">Gallery </i> </a>
        <a href="#" class="p-3 pl-5 pr-5">Pricing </i> </a> 
      </nav>
     <div class="bars text-right p-3" style='cursor:pointer;'>
      <div class='menu' onclick='menu()'> 
        <div class='bg-light m-1'></div><div class='bg-light m-1'></div><div class='bg-light m-1'></div>
      </div>
      <style>
        .menu div {width:30px; height:3px;}
        @media screen and (max-width:992px){
          .brand {
            font-size:20px;
            // width:auto;
          }
        }
      </style>
    </div>
`