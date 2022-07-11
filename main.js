const accordion = document.getElementsByClassName('content-container');
const answer = document.querySelectorAll('.answer');

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', () => {
        this.classList.toggle('active');
        answer.style.height = "150px";
        
        
    });
};