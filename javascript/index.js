
var content = [
    {   
        Name : 'Create a website',
        Link : '02:00'},
    {   
        Name : 'Buy a Graphic design',
        Link : '03:00'},
    {   
        Name : ' Why you need a website for your business',
        Link : 'unknown'},
    {
        Name : 'Understanding a website',
        Link : 'Link' }
]

// var main =  document.getElementById('main')
// content.forEach(element => {
//     main.innerHTML +=`
// <div class="col-lg-3 col-md-4 col-sm-12">
// <div class="card jumbotron link shadow text-white bg-info h3 m-2"> ${element.Name}  </div>
// </div>
// `
// });

content.map(({Name, Link})=>{
    var main =  document.getElementById('main')
    main.innerHTML +=` 
                        <div class="col-lg-3 col-md-4 col-sm-12">
                            <div class="card-body m-1 bg-dark">
                                <h5 class="card-title">${Name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">${Link}</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div> 
`
})
