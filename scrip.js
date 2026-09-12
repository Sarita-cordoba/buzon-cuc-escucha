document.getElementById('buzonForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu sugerencia! Ha sido registrada con éxito.');
    this.reset();
});