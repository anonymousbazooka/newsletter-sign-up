

document.forms.form01.addEventListener('invalid', e => {
    e.preventDefault();
    e.target.classList.add('invalid');
  }, true);
  
  document.forms.form01.addEventListener('input', e => {
    if(e.target.validity.valid){
      e.target.classList.remove('invalid');
    }S
  });
  
  document.forms.form01.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'confirmation.html';
  });

 