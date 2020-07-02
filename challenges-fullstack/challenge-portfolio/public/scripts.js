const courses = document.querySelectorAll('.course');

for (let course of courses)  {
  course.addEventListener('click', function() {
    const pageId = course.getAttribute('id');
    
    window.location.href = `/courses/${pageId}`;

  });
}

