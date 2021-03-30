import { levelUpPokemon } from "../src/functions"
import { POKEMONS } from "../src/pokemons"
import { Trainer } from "../src/types"

describe('Pokemons', () => {
    describe('Progressão de níveis', () => {
        const trainer: Trainer = {
            age: 12,
            name: 'Ash',
            pokemonParty: [POKEMONS[11], POKEMONS[0], POKEMONS[3], POKEMONS[6]],
            pokemonBox: []
        }
    
        it('Deve subir o nível do pokemon', () => {
            trainer.pokemonParty.splice(0, 1, 
                levelUpPokemon(trainer.pokemonParty[0])
            )
            trainer.pokemonParty.splice(0, 1, 
                levelUpPokemon(trainer.pokemonParty[0])
            )
            trainer.pokemonParty.splice(0, 1, 
                levelUpPokemon(trainer.pokemonParty[0])
            )
            expect(trainer.pokemonParty[0]).toEqual({
                ...POKEMONS[11],
                level: 4
            })
        })
    
        it('Deve evoluir o pokemon', () => {
            trainer.pokemonParty.splice(0, 1, 
                levelUpPokemon(trainer.pokemonParty[0])
            )
            expect(trainer.pokemonParty[0]).toEqual({
                ...POKEMONS[12],
                level: 5
            })
        })
    
        it('Deve evoluir até ultima forma', () => {
            for (let index = 0; index < trainer.pokemonParty.length; index++) {
                let i = 0
                while(i < 5) {
                    trainer.pokemonParty.splice(
                        trainer.pokemonParty.indexOf(trainer.pokemonParty[index]),
                        1,
                        levelUpPokemon(trainer.pokemonParty[index])
                    )
                    i++
                }
            }
    
            expect(trainer.pokemonParty).toEqual([
                { ...POKEMONS[12], level: 10 },
                POKEMONS[2],
                POKEMONS[5],
                POKEMONS[8],
            ])
        })
    })
})