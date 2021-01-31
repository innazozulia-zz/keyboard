let btn = document.querySelectorAll('.key');

function t11(e){
  btn.forEach(elem => {
    let data = elem.getAttribute('data');
    if(e.code == data){
      elem.classList.add('active');
      console.log('active');
    }
    else {
      elem.classList.remove('active');
    }
  });

}
document.querySelector('.i-11').onkeydown = t11;