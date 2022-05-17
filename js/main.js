const elFormSection = document.querySelector('.feature-wrapper__form-section');
const elForm = document.querySelector('.js-form');
const elUrlShortenerResults = document.querySelector('.url-shortener-results');

if (elForm) {
    elForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        elUrlShortenerResults.classList.add('url-shortener-results--open');
    });
}

if (elFormSection) {
    elFormSection.addEventListener('click', function (evt) {
        if (evt.target.matches('.js-copy-button')) {
            // Change button text 
            evt.target.textContent = 'Copied!';

            // Change button bg-color 
            evt.target.classList.add('copy-button--copied');

            // Copy short link to clipboard 
            // navigator.clipboard.writeText(evt.target.PreviousElementSibling.textContent);

            // Reset button text and class after 1 second 
            setTimeout(function() {
                evt.target.textContent = 'Copy'; 
                evt.target.classList.remove('copy-button--copied');    
            }, 1000);
        }
    });
}


