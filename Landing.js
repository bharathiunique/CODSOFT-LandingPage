function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
function bookNow() {
    alert('Booking functionality will be implemented here.');
    closePopup(); 
}
setTimeout(showPopup, 10000);

const carouselImages = document.querySelectorAll('.carousel-image');
        const intervalTime = 5000; 

        let imageIndex = 0;

        function nextImage() {
            carouselImages.forEach(image => image.style.display = 'none');

            imageIndex = (imageIndex + 1) % carouselImages.length;

            carouselImages[imageIndex].style.display = 'block';
        }

        carouselImages[imageIndex].style.display = 'block';

        setInterval(nextImage, intervalTime);

        setInterval(() => {
            scrollCards(1);
          }, 5000);
      
          function scrollCards(direction) {
            const cardContainer = document.querySelector('.card-container');
            const cardWidth = cardContainer.querySelector('.card').offsetWidth;
            const scrollWidth = cardContainer.scrollWidth;
            const scrollLeft = cardContainer.scrollLeft;
      
            let nextScrollLeft = scrollLeft + direction * cardWidth;
        
            if (nextScrollLeft >= scrollWidth) {
              nextScrollLeft = 0; 
            } else if (nextScrollLeft < 0) {
              nextScrollLeft = scrollWidth; 
            }
        
            cardContainer.scrollTo({
              left: nextScrollLeft,
              behavior: 'smooth'
            });
          }

          setInterval(() => {
            scrollCustomers(1);
          }, 5000);
        
          function scrollCustomers(direction) {
            const customerCarousel = document.querySelector('.customer-carousel');
            const customerWidth = customerCarousel.querySelector('.customer').offsetWidth;
            const scrollWidth = customerCarousel.scrollWidth;
            const scrollLeft = customerCarousel.scrollLeft;
        
            let nextScrollLeft = scrollLeft + direction * customerWidth;
        
            if (nextScrollLeft >= scrollWidth) {
              nextScrollLeft = 0;
            } else if (nextScrollLeft < 0) {
              nextScrollLeft = scrollWidth;
            }
        
            customerCarousel.scrollTo({
              left: nextScrollLeft,
              behavior: 'smooth'
            });
          }