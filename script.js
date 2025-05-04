document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagemEnviada').textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    this.reset();
});
