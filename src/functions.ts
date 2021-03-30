import { POKEMONS } from './pokemons'
import { Pokemon, Trainer } from './types'

export function createPokemonTrainer(
        name: string,
        age: number,
        initialPokemonId: number
    ): Trainer {
    const pokemonInitial = POKEMONS[initialPokemonId]

    if(!pokemonInitial) throw 'Pokemon não existe'
    if(age < 10) throw 'Você não tem idade suficiente'

    const trainer = {
        name: String(name),
        age: Number(age),
        pokemonParty: [{...pokemonInitial}],
        pokemonBox: []
    }
    return trainer
}

export function catchPokemon(
        pokemonId: number,
        trainer: Trainer
    ): Trainer {
        const newPokemon = POKEMONS[pokemonId]

        if(!newPokemon) throw 'Pokemon não existe'
        if(trainer.pokemonParty.length) {}

        const newTrainer = {...trainer}

        switch(newTrainer.pokemonParty.length) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                newTrainer.pokemonParty = [...newTrainer.pokemonParty, newPokemon]
                return newTrainer
            default: 
                newTrainer.pokemonBox = [...newTrainer.pokemonBox, newPokemon]
                return newTrainer
        }
    }

export function levelUpPokemon(pokemon: Pokemon): Pokemon {
    const newLevel = pokemon.level + 1
    let newPokemon = {
        ...pokemon,
        level: newLevel
    }

    if(!newPokemon?.evolutionId)
    return newPokemon
    
    const evolvedForm = POKEMONS[newPokemon.evolutionId]

    if(newPokemon.level >= evolvedForm.level)
    return {
        ...evolvedForm,
        level: newLevel
    }

    return newPokemon
}