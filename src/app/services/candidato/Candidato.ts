import { CONHECIMENTOS, Conhecimentos } from "./Conhecimentos"

export class Candidato {
    nome: string = ''
    email: string = ''
    idade: number
    urlLinkedin: string 
    cbConhecimentos: Conhecimentos[]
}

export const CANDIDATOS: Candidato[] = [
    {
        nome: "Pedro Henrique Eifler",
        email: "pedroqueeifler@gmail.com",
        idade: 20,
        urlLinkedin: "https://www.linkedin.com/in/pedroqueeifler/",
        cbConhecimentos: CONHECIMENTOS
    },
    {
        nome: "Elissa",
        email: "elissa@gmail.com",
        idade: 20,
        urlLinkedin: "https://www.linkedin.com/in/pedroqueeifler/",
        cbConhecimentos: CONHECIMENTOS
    },
    {
        nome: "Miro",
        email: "miro@gmail.com",
        idade: 20,
        urlLinkedin: "https://www.linkedin.com/in/pedroqueeifler/",
        cbConhecimentos: CONHECIMENTOS
    }
]