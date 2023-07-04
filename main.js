function Arma(nome) {
    this.nome = nome;
}

function ArmaPesada(nome, tipoEmpunhadura, paisOrigem, peso) {
    Arma.call(this,nome)
    
    this.tipoEmpunhadura = tipoEmpunhadura;
    this.paisOrigem = paisOrigem;
    this.peso = peso;
}

function ArmaLeve(nome, tipoEmpunhadura, paisOrigem, peso) {
    Arma.call(this,nome)
    
    this.tipoEmpunhadura = tipoEmpunhadura;
    this.paisOrigem = paisOrigem;
    this.peso = peso;
}

const alabardaChinesa = new ArmaPesada("Claymore", "Cruciforme de duas mãos, com pomo", "Escócia", "2,2 - 2,8kg");
const zweihander = new ArmaPesada("Zweihänder", "Cruciforme, de duas mãos, com pomo", "Alemanha", "2 - 3.2kg");
const katana = new ArmaPesada("Katana", "Cabo para duas mãos, com guarda punho quadrado ou circular", "Japão", "1,1 - 1,3kg");

const gladio = new ArmaLeve("Gládio", "com pomo em volutas, de uma espada de antenas", "Roma", "500 - 900g" );
const rapieira = new ArmaLeve("Rapieira", "formada a partir de madeira, uma peça torneada que envolve o espigão da lâmina", "Espanha", "800 - 1000g" )

console.log(alabardaChinesa);
console.log(zweihander);
console.log(katana);
console.log(gladio);
console.log(rapieira);

console.log(zweihander instanceof Arma);