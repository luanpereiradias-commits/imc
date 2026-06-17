function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (!peso || !altura || altura <= 0) {
        resultadoDiv.innerHTML = "Por favor, preencha todos os campos corretamente.";
        resultadoDiv.style.background = "#ffebee";
        resultadoDiv.style.color = "#c62828";
        resultadoDiv.classList.add('show');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        cor = "#ff9800";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        cor = "#4caf50";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        cor = "#ff9800";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
        cor = "#f44336";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
        cor = "#d32f2f";
    } else {
        classificacao = "Obesidade grau 3 (mórbida)";
        cor = "#b71c1c";
    }

    resultadoDiv.innerHTML = `
        <strong>Seu IMC é: ${imc.toFixed(2)}</strong><br>
        <span style="color: ${cor}">${classificacao}</span>
    `;
    resultadoDiv.style.background = "#f0f8ff";
    resultadoDiv.style.color = "#333";
    resultadoDiv.classList.add('show');
}
