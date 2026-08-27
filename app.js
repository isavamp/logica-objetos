class Personagem{
constructor(name,life,atack){
    this.name = name
    this.life = life
    this.atack = atack
}

causaDano(personagem){
 personagem.recebeDano(this.atack)

}
 recebeDano(quantidade){
    this.life = this.life - quantidade

     if(this.life <=0){
        this.life = "morreu"
    }
}
estaVivo(){
return this.vida > 0 
}

mostraStatus(){
console.log(this.name + " | Vida: " + this.vida)

}




}
const druida = new Personagem("Obin", 100, 15)
const guerreiro = new Personagem("Gaia", 60, 20)
const mago = new Personagem("Feiticeira", 30, 35)
const arqueiro = new Personagem("Akaith", 80, 25)
const elfo = new Personagem("Drazio", 35, 15)
const dragao = new Personagem("Shibuya", 200, 80)
const mutante = new Personagem("tempestade", 70, 50)



mago.causaDano(arqueiro)
mago.causaDano(arqueiro)
druida.causaDano(arqueiro)
arqueiro.mostraStatus()
console.log(arqueiro.estaVivo())
