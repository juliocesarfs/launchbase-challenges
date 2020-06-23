const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.course');
const modal = document.querySelector('.modal');


//active modelOverlay function
for (let course of courses)  {
  course.addEventListener('click', function() {
    modalOverlay.classList.add('active');

    const pageId = course.getAttribute('id');

    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`;
  });
}


//close modelOverlay function
document.querySelector('.close-modal').addEventListener('click', function() {
  
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
  modal.classList.remove('maximize');
  document.querySelector('#fullscreen').textContent = 'fullscreen';

});


//maximize modelOverlay function
document.querySelector('.maximize-modal').addEventListener('click', function() {                                  
  if(modal.classList.contains('maximize')) {
    modal.classList.remove('maximize');

    document.querySelector('#fullscreen').textContent = 'fullscreen';
  }
  else {
    modal.classList.add('maximize');

    document.querySelector('#fullscreen').textContent = 'fullscreen_exit';
  }
  
});

