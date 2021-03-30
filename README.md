# ESTUDO DE JEST PARA TESTES UNITÁRIOS

## REGRAS
- cada treinador carrega consigo 1 party de 6 pokemons
- cada treinador tem uma box na qual pode armazenar pokemons
- alguns pokemons evoluem outros não
- é possível de um treinador capturar 1 novo pokemon
  - caso ele ja tenha 6 pokemons em sua party, o novo pokemon irá direto para box
- ao criar um novo treinador ele deve ter a idade mínima de 10 anos

# PARTE DE TESTES

## TESTAR MÉTODOS ÚNICOS
Testar métodos únicos que sejam parte pequena de código, que não dependam de outros métodos para serem executados

## MOCKS DE DEPENDÊNCIA
Caso a não tenha como escapar de dependencia de outros método, é possivel mocar esta dependência para que o teste seja executado


## FUNDAMENTOS 
* **F (Fast)** - Rápidos: devem ser rápidos, pois testam apenas uma unidade;
* **I (Isolated)** - Testes unitários são isolados, testando individualmente as unidades e não sua integração;
* **R (Repeateble)** - Repetição nos testes, com resultados de comportamento constante;
* **S (Self-verifying)** - A auto verificação deve verificar se passou ou se deu como falha o teste;
* **T (Timely)** - O teste deve ser oportuno, sendo um teste por unidade.

# PADRÃO DO PROJETO

- cada arquivo testa vários conjunto de unidades do mesmo contexto

**EX**
> no projeto nós temos contexto das implementações direcionadas ao pokemons, e aos treinadores dos pokemons, assim testamos os dois separadamente

# TO DO
- [ ] implementar testes comentados em treinador
- [ ] resolver warnings na execução dos testes