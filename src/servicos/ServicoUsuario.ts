import { Usuario } from "../modelos/Usuario"

export class ServicoUsuario {
    private usuarios: Usuario[] = []

    constructor() {}

    criarUsuario(dado: any): Usuario {
        const usuario = new Usuario(dado.nome, dado.email, dado.senha)
        this.usuarios.push(usuario) // Simula a persistência de usuários
        return usuario
    }
}
