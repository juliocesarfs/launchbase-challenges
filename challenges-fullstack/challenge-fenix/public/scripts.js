const cards = document.querySelectorAll('.card_image-container');

for (let card of cards) {
  card.addEventListener("click", function(){    
    const videoId = card.getAttribute('id');

    window.location.href = `/video?id=${videoId}`;

  });
}
