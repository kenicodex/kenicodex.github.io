var sidebar = document.getElementById('sidebar')
sidebar.style.width = '0px'

const menu =()=>{ 
    if (sidebar.style.width == '0px') {
        sidebar.style.width = '50%'
        sidebar.style.opacity = '1'
        sidebar.style.transition = 'width 1s'
    } else {
        sidebar.style.width = '0px'
        sidebar.style.opacity = '0'
        sidebar.style.transition = 'width 2s'
    }
}
sidebar.innerHTML = `
<div class="w-100 pt-3 pb-3 bg-dark text-center border-bottom">
<h3>Sleek Codes</h3>
The No. 1 Graphics design and Web development assistant 
</div>
<div id='content'>
</div>
<style>
        .sidelink:{

        }
</style>
`
const links = [
    {Page : 'Home', Link : 'index.html'},
    {Page : 'Graphics', Link : 'graphics.html'},
    {Page : 'Websites', Link : 'website.html'},
    {Page : 'Gallery', Link : 'gallery.html'}, 
    {Page : 'Pricing', Link : 'pricing.html'},
    {Page : 'Contact', Link : '/'},
    {Page : 'About Us', Link : '/'}
]

links.forEach(element => {
    document.getElementById('content').innerHTML += `
    <a href="${element.Link}">
    <div class="w-100 p-3 text-center btn-dark btn sidelink border-bottom" >
    ${element.Page}
    </div>  </a>`
});
