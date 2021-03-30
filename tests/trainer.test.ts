import { createPokemonTrainer, catchPokemon, levelUpPokemon } from '../src/functions'
import { POKEMONS } from '../src/pokemons'

describe('Treinador', () => {
    describe('Inicia uma nova jornada', () => {
        let newTrainer = createPokemonTrainer('Red', 10, 3)
    
        it('Deve criar um novo treinador pokemon', () => {
            expect(newTrainer.name).toBe('Red')
            expect(newTrainer.age).toBeGreaterThanOrEqual(10)
            expect(newTrainer.pokemonParty[0]).toEqual(POKEMONS[3])
        })
    
        newTrainer = catchPokemon(9, newTrainer)
    
        it('Deve capturar o primeiro pokemon', () => {
            expect(newTrainer.pokemonParty.length).toBe(2)
            expect(
                newTrainer.pokemonParty.find(pokemon => pokemon.id === 9)
                ).toEqual(POKEMONS[9])
        })
    })

    describe('Administra pokemons', () => {
        // TODO
        // - implementar retirar/adicionar ao Box pokemons da party
    })
})