var x = ['', document.getElementById("img1").value, document.getElementById("img2").value, 
document.getElementById("img3").value, document.getElementById("img4").value,]
var image =  document.getElementById('slide')
        image.style.backgroundImage = `url('${x[4]}')` //= `<img src='${x[4]}' alt="">`
let i = 0
setInterval(() => {
    image.style.opacity = '0'
    i++
    if (i > 4) { i = 1
    image.style.opacity = '1'
    image.style.backgroundImage = `url('${x[i]}')` //`<img src='' alt="">`
    } else {
    image.style.opacity = '1'
    image.style.backgroundImage = `url('${x[i]}')` //`<img src='' alt="">`
    }
    
}, 5000);

function change(move) {
    var image =  document.getElementById('slide')
  i = Math.abs( i + move)
  if(i == 0 ){
        i = 4
        image.style.backgroundImage = `url('${x[i]}')`  //`<img src='' alt="">`
  }else if(i >= 5){
    i = 1
    image.style.backgroundImage = `url('${x[i]}')`  //`<img src='' alt="">`
  }else{
    image.style.backgroundImage = `url('${x[i]}')`  //`<img src='' alt="">`
  }
}


function seemore(params) {
  // params.style.display = 'none'
 var x = params.childNodes[1];
  if(x.style.height == '0px'){
    x.style.display = 'block'
    x.style.height = 'auto'
  }else{
    x.style.display = 'none'
    x.style.height = '0px'
  }
}