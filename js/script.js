document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.createElement('canvas');
    document.body.insertBefore(canvas, document.body.firstChild);
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var easterEgg = "QUEMLEUEGAY"; 
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    var fontSize = 10,
        columns = canvas.width / fontSize;

    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    var easterEggX = Math.floor(Math.random() * (canvas.width - easterEgg.length * fontSize));
    var easterEggY = -fontSize;
    var showEasterEgg = false;

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px arial';

        // Desenhar o easter egg
        if (showEasterEgg) {
            ctx.fillStyle = '#FF00FF'; // Cor do easter egg
            ctx.fillText(easterEgg, easterEggX, easterEggY);
            easterEggY += 1; // Move o easter egg para baixo

            if (easterEggY > canvas.height) {
                showEasterEgg = false;
            }
        } else if (Math.random() < 0.01) { // Chance de 0.1% de iniciar o easter egg
            showEasterEgg = true;
            easterEggX = Math.floor(Math.random() * (canvas.width - easterEgg.length * fontSize));
            easterEggY = -fontSize;
        }

        // Desenhar o efeito Matrix
        ctx.fillStyle = '#0F0'; // Cor padrão
        for (var i = 0; i < drops.length; i++) {
            var text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        showEasterEgg = false;
    });
});
