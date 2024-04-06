function myFunction() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        document.getElementById("darkMode").innerText = "Dark Mode";
    } else {
        element.classList.add("dark-mode");
        document.getElementById("darkMode").innerText = "Light Mode";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector('.glow');
    const glowControlButton = document.getElementById('glowControl');

    let animationEnabled = true;

    glowControlButton.addEventListener('click', function () {
        if (animationEnabled) {
            h1.style.animation = 'none';
            document.querySelector("#glowControl").innerHTML = "Glow On";
        } else {
            h1.style.animation = 'glow 1s ease-in-out infinite alternate';
            document.querySelector("#glowControl").innerHTML = "Glow Off";
        }

        animationEnabled = !animationEnabled;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector('.glow');

    h1.addEventListener('mouseenter', function() {
        h1.style.color = 'crimson';
    });

    h1.addEventListener('mouseleave', function() {
        h1.style.color = '';
    });
});
