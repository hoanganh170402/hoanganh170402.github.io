{/* <div class="lightbox">
    <div class="lightbox-content">
        <img src="./Images/95fe6b9884c91439836b6f22cb7a7829.jpg" 
        alt="" 
        class="layout-images" />
    </div>
</div> */}
const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleZoomImages));
function handleZoomImages(event)
{
    console.log(event.target);
    const image = event.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <img src="${image}" 
        alt="" 
        class="layout-images" />
    </div>
</div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
    document.body.addEventListener("click",function(e)
    {
        if(e.target.matches(".lightbox"))
        {
            e.target.parentNode.removeChild(e.target);
        }
    })