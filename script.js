document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;

        if (!name || !email) {
            alert("Por favor, preencha todos os campos para receber seu guia gratuito!");
            return;
        }

        alert("🎉 Sucesso! Seu guia gratuito será enviado para seu e-mail em instantes!");
        
        form.reset();
    });
});
