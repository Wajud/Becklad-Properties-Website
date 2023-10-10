const clients = [
      {
            name: "Taiwo Emmanuel",
            comment: "I am absolutely happy with the house I bought through Becklad Properties. From the very beginning of my homebuying journey, they went above and beyond to understand my needs and preferences. Their team of dedicated professionals guided me every step of the way, making the entire process smooth and stress-free."
      },
      {
            name: "Sodipo Lawal",
            comment: "I highly recommend Becklad to anyone in search of their dream home. They have a remarkable team that genuinely care about your happiness and satisfaction. Thanks to them, I am now living in my dream home, and I couldn't be more grateful"
      },
      {
            name: "Foloshade Ojo",
            comment: "I recently bought a piece of land throgh Becklad and I am delighted about it. Complete peace of mind, no risk of disputes. Prime location near urban amenities.I highly recommend their professionalism."
      },
      {
            name: "Muhammed Ayoola",
            comment: "Booking with Becklad was seamless. The property exceeded expectations, well-maintained, and conveniently located. Exceptional customer service made our stay memorable. Highly recommended for short-term rentals!"
      }

]

const nextBtn = document.querySelector("#next-btn")
const previousBtn = document.querySelector("#previous-btn")

let count = 0;

const clientName = document.querySelector(".review-container h2")
const clientReview = document.querySelector(".review-container p q")

nextBtn.addEventListener("click", ()=>{
      if(count < clients.length-1){
            count++
      }

      else{
            count = 0
      }

      clientName.textContent=clients[count].name;
      clientReview.textContent=clients[count].comment

})

previousBtn.addEventListener("click", ()=>{
      if(count == 0){
            count = clients.length - 1;
      }

      else {
            count --;
      }

      clientName.textContent=clients[count].name;
      clientReview.textContent=clients[count].comment

})
