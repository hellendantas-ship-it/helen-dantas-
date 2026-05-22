
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EFEITO DOS CONTADORES DE ESTATÍSTICAS ---
    const contadores = document.querySelectorAll('.contador');
    
    const animarContadores = () => {
        contadores.forEach(contador => {
            const alvo = +contador.getAttribute('data-alvo');
            const numeroAtual = +contador.innerText;
            
            // Define a velocidade do aumento baseado no valor final
            const incremento = alvo / 50; 

            if (numeroAtual < alvo) {
                contador.innerText = Math.ceil(numeroAtual + incremento);
                setTimeout(animarContadores, 30);
            } else {
                contador.innerText = alvo;
            }
        });
    };

    // Ativa a animação quando o usuário rolar a tela até a seção dos números
    const secaoDados = document.querySelector('#dados');
    const observador = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animarContadores();
            observador.disconnect(); // Roda a animação apenas uma vez
        }
    }, { threshold: 0.5 });

    observador.observe(secaoDados);


    // --- 2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const form = document.getElementById('form-contato');
    const statusEnvio = document.getElementById('status-envio');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById('nome').value;

        // Simulação de envio com feedback visual
        statusEnvio.innerText = `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`;
        statusEnvio.className = "sucesso"; // Aplica o estilo CSS verde
        
        // Limpa o formulário após o envio
        form.reset();
    });
});
