
onButtonClicked = function() {
    const element = document.getElementById('text');
    element.style.backgroundColor = 'rgba(235, 80, 80, 0.4)';
    element.style.color = 'white';
    element.style.padding = '2px';
    let initialWord = element.textContent;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

    let newWord = "Super Saiyan";
    let initialWordTmp = initialWord;


    if (newWord.length > initialWord.length) {
        for (let i = 0; i < newWord.length - initialWord.length; i++) {
            initialWordTmp = initialWordTmp + ' ';
        }
    }
    initialWord = initialWordTmp;

    if (newWord.length < initialWord.length) {
        element.textContent = initialWord.substr(0, newWord.length);
    }

    setInterval(() => {
        if (newWord !== element.textContent) {
            for (let i = 0; i < initialWord.length; i++) {
                if (element.textContent.substring(i, i + 1) !== newWord.substring(i, i + 1)) {
                    const letter = letters[(letters.indexOf(element.textContent.substring(i, i + 1)) + 1) % (letters.length)];
                    element.textContent = element.textContent.substring(0, i) + letter + element.textContent.substring(i + 1);
                }
            }
        } else {
            element.style.backgroundColor = 'white';
            element.style.color = 'black';
        }
    }, 20);

    // element.style.backgroundColor = 'white'
}