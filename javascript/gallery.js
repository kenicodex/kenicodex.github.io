var gallery = document.getElementById('pics')
for (let i = 1; i <= 102; i++) {
    gallery.innerHTML +=`
    <div class="col-lg-3 col-md-4 col-sm-12 h-auto"  >
    <a href='../gallery/gallery (${i}).jpg'>

        <img src="../gallery/gallery (${i}).jpg" alt="" width='100%' height='auto%' class='img card-body'>
        </a>

    </div>
    `
}
for (let i = 1; i <= 6; i++) {
    gallery.innerHTML +=`
    <div class="col-lg-3 col-md-4 col-sm-12 h-auto"  >

        <img src="../gallery/gallery (${i}).PNG" alt="" width='100%' height='auto%' class='img'>

    </div>
    `
}