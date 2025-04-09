var character = null;

function addActiveClass(element) {
    console.log(element)
    console.log(character)
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('orange'));
    buttons.forEach(button => button.classList.add('blue'));

    // Add 'active' class to the clicked button
    element.classList.remove('blue');
    element.classList.add('orange');
    if (!element.classList.contains('checked')) {
        element.innerHTML += ' ✅';
        element.classList.add('checked');
    }

    console.log(element.id)
    changeVideoSource('/' + character + '/' + element.id)
}


function changeVideoSource(newSource) {
    const videoElement = document.querySelector('video');
    const sourceElement = videoElement.querySelector('source');
    sourceElement.src = newSource + '.mp4';
    videoElement.load();
    videoElement.play()
}


function proceedToNextSteps() {
    document.getElementById("educate").style.display = "none";
    document.getElementById("likert").style.display = "flex";
    document.getElementById("change-alex").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("back").style.display = "flex";
    changeVideoSource("next")
}

function returnToEducate() {
    document.getElementById("educate").style.display = "flex";
    document.getElementById("likert").style.display = "none";
    document.getElementById("next").style.display = "flex";
    document.getElementById("back").style.display = "none";
    changeVideoSource("introduction")
    addActiveClass(document.getElementById("introduction"))
}

function startInteraction(alex) {
    character = alex
    console.log('/' + alex + '/intro')
    document.getElementById("select").style.display = "none";
    document.getElementById("interaction").style.display = "flex";
    // changeVideoSource('/' + character + '/intro')
    // const firstButton = document.querySelector('.button');
    // if (firstButton) {
    //     firstButton.classList.remove('blue');
    //     firstButton.classList.add('orange');
    //     if (firstButton.innerHTML.split('✅').length - 1 < 1) firstButton.innerHTML += ' ✅';
    //     firstButton.classList.add('checked');
    // }
    // const videoElement = document.querySelector('video');
    // videoElement.play()
}


function changeCharacter() {
    const videoElement = document.querySelector('video');
    videoElement.pause()
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('orange'));
    buttons.forEach(button => button.classList.add('blue'));
    document.getElementById("select").style.display = "flex";
    document.getElementById("interaction").style.display = "none";
}

