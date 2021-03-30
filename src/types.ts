export interface Pokemon {
    id: number
    name: string
    level: number
    evolutionId?: number
}

export interface Trainer {
    name: string
    age: number
    pokemonParty: Array<Pokemon>
    pokemonBox: Array<Pokemon>
}