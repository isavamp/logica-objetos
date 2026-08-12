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
}
const druida = new Personagem("Obin", 150, 15)
const guerreiro = new Personagem("Gaia", 60, 20)
const mago = new Personagem("Feiticeira", 30, 35)
const arqueiro = new Personagem("Akaith", 80, 25)

console.log(druida)
console.log(guerreiro)
console.log(mago)
console.log(arqueiro)


    