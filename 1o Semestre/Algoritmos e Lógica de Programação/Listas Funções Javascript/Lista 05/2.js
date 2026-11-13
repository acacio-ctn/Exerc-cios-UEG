function converterSegundosEmHoras(seconds){
    let horas = seconds / 3600
}
    function converterSegundosEmMinutos(seconds){
        let minutos = seconds / 60
}
    const prompt = require("prompt-sync")();
    let segundos = (prompt("Digite o tempo em segundos do evento: "));
    let segundosEmHoras = converterSegundosEmHoras (segundos);
    let segundosEmMinutos = converterSegundosEmMinutos (segundos);
    
console.log(`Duração do evento foi de , horas  minutos e ${segundos} segundos.`);
