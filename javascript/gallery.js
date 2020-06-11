var gallery = document.getElementById('pics')
document.getElementById("back").style.display = "none"
function start(params) {
    for (let i = 1; i <= 102; i++) {
        gallery.innerHTML +=`
        <div class="col-lg-3 col-md-4 col-sm-12 h-auto"  >
        <a href='#'>
    
            <img src="../gallery/gallery (${i}).jpg" alt="" width='100%' height='auto%' class='img card-body' onclick="img(event, ${i})">
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
    document.getElementById("super").style.display = "none"
    document.getElementById("back").style.display = "none"
}
start()
var show = document.getElementsByClassName("img")

function img(e, i) {
    document.getElementById("back").style.display = "block"
        document.getElementById("pics").innerHTML = `<div class='text-center container' id="super">
        <img src="${e.target.src}" alt="" width='auto' height='400px' class='mt-5 col-lg-6 col-sm-12' /> <br>
        <a href="${e.target.src}" download="img"> <button class="btn-success btn m-2">download</button></a></div>`
    alert(i)
}