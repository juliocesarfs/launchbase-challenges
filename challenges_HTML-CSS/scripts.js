const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.course');

for (let course of courses)  {
  course.addEventListener('click', function(){
    modalOverlay.classList.add('active');

    const pageId = course.getAttribute('id');

    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
});