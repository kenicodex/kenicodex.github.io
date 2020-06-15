
var content = [
    {   
        Name : 'Create a website',
        Link : 'website.html', desc:"Our web creation service is quick and easy, we deliver in less than 7 days from order wirh no excuses", src : '../images/How-to-create-website.png', alt : 'Create a website'},
    {   
        Name : 'Buy a Graphic design',
        Link : 'graphics.html', desc:"This includes photo editing, logo making, banner designs, pamphlet design and anything under graphics ", src : '../images/photograothy-1050x700.jpg', alt : 'Buy a Graphic design'},
    {   
        Name : ' Why you need a website for your business',
        Link : 'website.html', desc:"typiclaly every business out there require a means of publising them selves, with the help of a website they csn reach customers at quicker rates ", src : '../images/business-finance--accounting--contract--advisor-investment-consulting-marketing-plan-for-the-company-with-using-tablet-and-computer-technology-in-analysis--950986656-354e5d736f2b490b8e862fcdfe503f43.jpg', alt : 'Why you need a website for your business'},
    {
        Name : 'Why you need a graphics for your business',
        Link : 'Link', desc:"Virtually every business out there require a picture for adversiting their businesses, it is impossible for one to have a business with out digital advertisement ", src : '../images/Professional-Video-Editing-Tips-and-Tricks.jpg', alt : 'Why you need a graphics for your business' },
    {
        Name : 'Follow our tutorials',
        Link : 'Link', desc:"contact us today to follow our web design and photo editing tutorial", src : '../images/bgimg.jpg', alt : '' }
]


content.map(({Name, Link, src, alt, desc})=>{
    var main =  document.getElementById('main')
    main.innerHTML +=` 
                        <div class="col-lg-6 col-md-6 col-sm-12 con">
                            <div class="m-1 bg-white border shadow">
                                <h5 class="card-title p-2">${Name}</h5>
                                <img src="${src}" alt="${alt}" width="100%" height="auto" />
                                <p class="card-text p-2">${desc}</p>
                                <a href="#" class="card-link">${Link}</a>
                            </div>
                        </div> 
`
})
// var bod  = document.getElementById("main").childNodes.length;
// alert(bod)
function dothis() {
    var d = document.getElementsByClassName("con")
    for (let i = 0; i < d.length; i++) {
        const element = d[i];
        element.style.width = "0"
        setTimeout(() => {
            element.style= "width : 100%; transition: width 2s;"
        }, 500);
        
    }
}
