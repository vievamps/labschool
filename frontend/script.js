const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/* sidebar */

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector('.form-container.sign-in form');

        form.addEventListener('submit', async (event) => {
            event.preventDefault(); //

            const email = form.querySelector('input[name="email"]').value;
            const senha = form.querySelector('input[name="senha"]').value;

            try {
                const response = await fetch('/usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, senha }),
                });

                const result = await response.json();

                if (response.ok) {
                   
                    console.log('Login realizado com sucesso!', result);
                
                    window.location.href = 'http://localhost/FRONTEND/home.html'; // Altere para a página que deseja redirecionar
                } else {
                    // Login falhou
                    console.error('Erro no login:', result.error);
                    alert(result.error); 
                }
            } catch (error) {
                console.error('Erro ao fazer a solicitação:', error);
                alert('Ocorreu um erro. Tente novamente mais tarde.');
            }
        });
    });



