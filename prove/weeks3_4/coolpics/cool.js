const menu = document.querySelector('nav');
const button = document.querySelector('.menu-btn');
if (window.innerWidth < 1200) {
    menu.classList.toggle('hide');
}

button.addEventListener('click', function() {
  menu.classList.toggle('hide');  
  button.classList.toggle('change');
})

const gallery = document.querySelectorAll('main img');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.close();
  }
});

gallery.forEach((img) => {

    img.addEventListener('click', openModal);
    
    function openModal(e) {
        const targ = e.target;
        const alt = targ.alt;
        const full = targ.src.replace('sm', 'full');
        
        modalImage.src = full;
        modalImage.alt = alt;
        
        modal.showModal();
    }
    closeButton.addEventListener('click', () => {
        modal.close();
    });
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});