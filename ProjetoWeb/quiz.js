function testar() {
    let contElsa = 0;
    let contKristoff = 0;
    let contOlaf = 0;
    let contAnna = 0;
    let todasRespondidas = true;  

    let radios = document.querySelectorAll('input[type="radio"]');

    
    for (let i = 0; i < radios.length; i++) {
        let questionName = radios[i].name; 
        let questionRadios = document.getElementsByName(questionName);
        
       
        let questionAnswered = false;
        for (let j = 0; j < questionRadios.length; j++) {
            if (questionRadios[j].checked) {
                questionAnswered = true;
                break;
            }
        }
        
        if (!questionAnswered) {
            todasRespondidas = false;
            break;
        }
    }


    if (todasRespondidas) {
        radios.forEach(e => {
            if (e.checked) {
                if (e.value == "Elsa") {
                    contElsa++;
                } else if (e.value == "Kristoff") {
                    contKristoff++;
                } else if (e.value == "Olaf") {
                    contOlaf++;
                } else if (e.value == "Anna") {
                    contAnna++;
                }
            }
        });

        let maior = Math.max(contElsa, contKristoff, contOlaf, contAnna);
        let pagina = "";

        if (contElsa === maior) {
            pagina = 'Elsa';
        } else if (contKristoff === maior) {
            pagina = 'Kristoff';
        } else if (contOlaf === maior) {
            pagina = 'Olaf';
        } else if (contAnna === maior) {
            pagina = 'Anna';
        }

        let resultado = `Elsa = ${contElsa}<br>
                         Anna = ${contAnna}<br> 
                         Kristoff = ${contKristoff}<br> 
                         Olaf = ${contOlaf}`;

        document.getElementById("resultado").innerHTML = resultado;

        
        localStorage.setItem('Elsa', contElsa);
        localStorage.setItem('Kristoff', contKristoff);
        localStorage.setItem('Olaf', contOlaf);
        localStorage.setItem('Anna', contAnna);

       
        if (pagina) {
            setTimeout(() => {
                window.location.href = `${pagina}.html`;
            }, 5000);
        }
    } else {
 
        alert("Por favor, selecione ao menos uma resposta em cada pergunta!");
    }
}
