var foot = document.getElementById('footer')
const newLocal = `
<style>

</style>
<div class="bg-dark w-100 position-relative d-lg-flex">
    <div class="col-lg-4 col-md-1" style="height:200px;">
        <div class="p-2">
            <h3 class="text-warning"> About us </h3>
            <p class="pl-1 text-white"> We are society that helps with web development and graphic design </p>
        </div>
    </div> 

    <div class="col-lg-4 col-md-1" style="height:200px;">
        <div class="p-2">
            <h3 class="text-warning"> Contact us </h3>
            <div>
               <input type="email" class="border m-2 w-50" placeholder="Email" />
               <br>
               <textarea class="m-2 w-50" id="" rows="2"  placeholder="Enter your message" ></textarea>
               <button class="btn-info pl-3 pr-3 p-2 w-25 border"> Send </button>
            </div>
        </div>
    </div> 

    <div class="col-lg-4 col-md-1" style="height:200px;">
        <div class="p-2">
            <h3 class="text-info">Useful links</h3>
            <a href="#" >About us </a>
            <a href="gallery.html" >Gallery </a>
            <a href="#" >how much does it cost to create a website </a>
        </div>
    </div> 
</div>   

<div class="w-100  p-2 bg-white text-dark text-center"> <i class="m-1 fa fa-"> 
    </i> <i class="m-1 fa fa-facebook-f"> </i> <i class="m-1 fa fa-twitter"> </i> <i class="m-1 fa fa-instagram"> </i> 
    <i class="m-1 fa fa-whatsapp"> </i>     
</div>
`
foot.innerHTML = newLocal