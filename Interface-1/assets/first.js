const searchInput = document.getElementById('searchInput');
const cardContainer = document.getElementById('cardContainer');
const cards = cardContainer.getElementsByClassName('card');

searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toLowerCase();
  
  for (let i = 0; i < cards.length; i++) {
    const cardText = cards[i].textContent.toLowerCase();
    
    if (cardText.includes(filter)) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
});


const list =document.getElementById('list');
const bars =document.getElementById('bar');
function f1(){

    list.classList.toggle("show");
    list.classList.toggle("list");

}


