let stars = {};

for (let i = 0; i < 5; i++) {
        stars[i] = document.getElementById("star-" + [i]);
        stars[i].onclick = function() {
            for (let k = 0; k <= 5; k++) {
                stars[k].classList.add('checked');
            }
            for (let j = 0; j <= [i]; j++) {
                stars[j].classList.remove('checked');
            }
        }
    }
