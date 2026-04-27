    function calculoAplicacaoProgramada (valorTaxa,valorAplicacaoMensal,NumeroDeMeses){
        const i = valorTaxa/100
        const valorAcumulado = (Math.pow(1+ i,NumeroDeMeses) -1) / i * valorAplicacaoMensal
        return valorAcumulado    
    }
        const prompt = require("prompt-sync")();
        let aplicacaoMes = Number (prompt("Informe o valor a ser aplicado: "));
        let taxa = Number (prompt("Informe a taxa: "));
        let numeroMeses = Number (prompt("Informe o número de meses a serem aplicados: "));
        let rendimento = calculoAplicacaoProgramada(taxa,aplicacaoMes,numeroMeses);
            console.log(`O rendimento desta aplicação será de ${rendimento.toFixed(2)}R$`);
