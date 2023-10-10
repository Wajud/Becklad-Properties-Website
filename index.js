

//Zooming into and out of images on hover

const propertiesImages = document.querySelectorAll(".properties-image-container img")

propertiesImages.forEach(propertyImage=>{
      propertyImage.addEventListener("mouseenter", (e)=>{
            const element = e.currentTarget;
            if(element.classList.contains("zoom-out-image")){
                  element.classList.replace("zoom-out-image", "zoom-in-image")
            }
            else{
                element.classList.add("zoom-in-image")  
            }
      } )
})

propertiesImages.forEach(propertyImage=>{
      propertyImage.addEventListener("mouseout", (e)=>{
            const element = e.currentTarget;
            if(propertyImage == element){
               element.classList.replace("zoom-in-image", "zoom-out-image")
            }
            else{
                  return
            }
      } )
})

//End of Zooming into and out of images on hover


//Mobile Menu functionality

const hamburger = document.getElementById("hamburger")
const closeMenu = document.getElementById("close-menu")
const mobileMenu = document.getElementById("mobile-menu");

let windowOverflow = true;


hamburger.addEventListener("click", ()=>{
      const header = document.querySelector("header")
      mobileMenu.style.top = `${header.getBoundingClientRect().height}px`
      hamburger.style.display="none";
      closeMenu.style.display = "block"
      document.querySelector("body").style.overflow = "hidden";
      windowOverflow = false;

})

closeMenu.addEventListener("click", ()=>{

   
      mobileMenu.style.top = "-100%";
      closeMenu.style.display = "none";
      hamburger.style.display="block";
      document.querySelector("body").style.overflow = "visible";
      windowOverflow = true; 
})

const mobileNavItems = document.querySelectorAll("#mobile-menu a")
mobileNavItems.forEach(mobileNavItem=>{
      mobileNavItem.addEventListener("click", ()=>{
            mobileMenu.style.top = "-100%";
            closeMenu.style.display = "none";
            hamburger.style.display="block";
            document.querySelector("body").style.overflow = "visible";
            windowOverflow = true; 
      })
})


//End of Mobile Menu functionality


//Menu and screensize


window.addEventListener("resize", ()=>{
      if(window.innerWidth >= 770){
            document.querySelector("body").style.overflow = "visible"

      }

      else{
            if(windowOverflow){
                  document.querySelector("body").style.overflow = "visible";

            }

            else{
                  document.querySelector("body").style.overflow = "hidden";
            }
      }
})


//End of Menu and screen size



//Current Year in footer 
document.getElementById("current-year").textContent = new Date().getFullYear()
