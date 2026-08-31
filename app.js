class Personagem{
constructor(name,life,atack,defesa){
    this.name = name
    this.life = life
    this.atack = atack
    this.defesa = defesa
}

causaDano(personagem){
 personagem.recebeDano(this.atack)

}
 recebeDano(quantidade){
    let dano = quantidade - this.defesa
    if(quantidade < this.defesa){
    dano = 0
    }

    this.life = this.life - dano

     if(this.life <=0){
        this.life = "morreu"
    }
}
estaVivo(){
return this.life > 0 
}

mostraStatus(){
console.log(this.name + " | Vida: " + this.life)

}




}
const druida = new Personagem("Obin", 100, 15, 8)
const guerreiro = new Personagem("Gaia", 60, 20, 15)
const mago = new Personagem("Feiticeira", 30, 35, 25)
const arqueiro = new Personagem("Akaith", 80, 25, 12)
const elfo = new Personagem("Drazio", 35, 15, 12)
const dragao = new Personagem("Shibuya", 200, 80, 72)
const mutante = new Personagem("tempestade", 70, 50, 46)



mago.causaDano(arqueiro)
mago.causaDano(arqueiro)
druida.causaDano(arqueiro)
arqueiro.mostraStatus()
console.log(arqueiro.estaVivo())
