class Personagem{
constructor(name,vida,ataque,defesa){
    this.name = name
    this.vida = vida
    this.vidaMax = vida
    this.ataque = ataque
    this.defesa = defesa
}

curar(quantidade){
this.vida = this.vida + quantidade

if(this.vida > this.vidaMax){
this.vida = this.vidaMax

}




}

causaDano(personagem){
 personagem.recebeDano(this.ataque)

}
 recebeDano(quantidade){
    let dano = quantidade - this.defesa
    if(quantidade < this.defesa){
    dano = 0
    }

    this.vida = this.vida - dano

     if(this.vida <=0){
        this.vida = "morreu"
    }
}
estaVivo(){
return this.vida > 0 
}

mostraStatus(){
console.log(this.name + " | Vida: " + this.vida)

}

}

class Guerreiro extends Personagem {
constructor(name){
    super(name, 60, 25, 15)
}

golpePesado(personagem){
    personagem.recebeDano(this.ataque * 2)
}

}

const druida = new Personagem("Obin", 100, 15, 8)
const guerreiro = new Guerreiro("Gaia")
const mago = new Personagem("Feiticeira", 30, 35, 25)
const arqueiro = new Personagem("Akaith", 80, 25, 12)
const elfo = new Personagem("Drazio", 35, 15, 12)
const dragao = new Personagem("Shibuya", 200, 80, 72)
const mutante = new Personagem("tempestade", 70, 50, 46)

const personagens = [
druida,
guerreiro,
mago,
arqueiro,
elfo,
dragao,
mutante

]
personagens.forEach(function(personagem){
personagem.mostraStatus()

})

let turno = 1
let jogadorAtual = 0


function proximoTurno(){
turno = turno + 1
jogadorAtual = jogadorAtual === 0 ? 1 : 0

}


const vidaGuerreiro = document.getElementById("vida-guerreiro")
vidaGuerreiro.innerText = guerreiro.vida

const ataqueGuerreiro = document.getElementById("ataque-guerreiro")
ataqueGuerreiro.innerText = guerreiro.ataque

const vidaMago = document.getElementById("vida-mago")
vidaMago.innerText = mago.vida


const guerreiroAtacar = document.getElementById("guerreiro-atacar")
guerreiroAtacar.addEventListener("click", () => {
    guerreiro.causaDano(mago)
    vidaMago.innerText = mago.vida
})

const ataqueMago = document.getElementById("ataque-mago")
ataqueMago.innerText = mago.ataque


const magoAtacar = document.getElementById("mago-atacar")
magoAtacar.addEventListener("click",() => {
mago.causaDano(guerreiro)
vidaGuerreiro.innerText = guerreiro.vida

})