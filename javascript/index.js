
var content = [
    {   
        Name : 'Create a website',
        Link : 'website.html', src : '../images/How-to-create-website.png', alt : 'Create a website'},
    {   
        Name : 'Buy a Graphic design',
        Link : 'graphics.html', src : '../images/photograothy-1050x700.jpg', alt : 'Buy a Graphic design'},
    {   
        Name : ' Why you need a website for your business',
        Link : 'website.html', src : '../images/business-finance--accounting--contract--advisor-investment-consulting-marketing-plan-for-the-company-with-using-tablet-and-computer-technology-in-analysis--950986656-354e5d736f2b490b8e862fcdfe503f43.jpg', alt : 'Why you need a website for your business'},
    {
        Name : 'Why you need a graphics for your business',
        Link : 'Link', src : '../images/Professional-Video-Editing-Tips-and-Tricks.jpg', alt : 'Why you need a graphics for your business' },
    {
        Name : 'Follow our tutorials',
        Link : 'Link', src : '../images/Analytics for Business Success-min.jpg', alt : '' }
]

// var main =  document.getElementById('main')
// content.forEach(element => {
//     main.innerHTML +=`
// <div class="col-lg-3 col-md-4 col-sm-12">
// <div class="card jumbotron link shadow text-white bg-info h3 m-2"> ${element.Name}  </div>
// </div>
// `
// });

content.map(({Name, Link, src, alt})=>{
    var main =  document.getElementById('main')
    main.innerHTML +=` 
                        <div class="col-lg-3 col-md-4 col-sm-12">
                            <div class="m-1 bg-white">
                                <h5 class="card-title p-2">${Name}</h5>
                                <h6 class="card-subtitle mb-2 p-2 text-muted">Card subtitle</h6>
                                <img src="${src}" alt="${alt}" width="100%" height="auto" />
                                <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">${Link}</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div> 
`
})
