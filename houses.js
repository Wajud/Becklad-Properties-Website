
//Image Swap functionality
const subImages = document.querySelectorAll(".sub-image");
subImages.forEach(subImage=>{
      subImage.addEventListener("click", (e)=>{
            const clickedSubImage = e.currentTarget;
            const subImageParent = clickedSubImage.parentElement.parentElement.parentElement;
            const mainImage = subImageParent.querySelector(".main-image")
            let clickedSubImageSrc = clickedSubImage.src;
            clickedSubImage.src = mainImage.src;
            mainImage.src = clickedSubImageSrc;
            
      })
})
