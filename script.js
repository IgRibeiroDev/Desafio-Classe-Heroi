class personagem {
  constructor(classePersonagem) {
    this.nome = "Odin";
    this.idade = 100;
    this.tipo = classePersonagem;
  }
  atacar() {
    if (classePersonagem === "mago") {
      return alert(`O ${this.tipo} atacou usando magia.`);
    } else if (classePersonagem === "guerreiro") {
      return alert(`O ${this.tipo} atacou usando espada.`);
    } else if (classePersonagem === "monge") {
      return alert(`O ${this.tipo} atacou usando artes marciais.`);
    } else if (classePersonagem === "ninja") {
      return alert(`O ${this.tipo} atacou usando shuriken.`);
    }
  }
}

let classePersonagem = prompt(`
      Escolha sua classe:
      > mago
      > guerreiro
      > monge
      > ninja 
      `);

let personagemUsuario = new personagem(classePersonagem);
personagemUsuario.atacar();