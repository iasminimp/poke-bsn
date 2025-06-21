# Desafio – AEVO by Iasmin Marques

- Tela principal: Deve exibir o nome e a imagem do Pokémon. O layout fica a seu critério, desde que seja funcional e organizado.

- Navegação: Implemente redirecionamento para uma tela de detalhes, conforme descrito no item 3.

- Tela de detalhes: Apresente uma lista com no mínimo 6 descrições adicionais e imagens relacionadas ao Pokémon selecionado. O layout pode ser escolhido por você.

- Boas práticas: Compartilhe o projeto no GitHub seguindo boas práticas de desenvolvimento, incluindo commits claros e frequentes.

- README.md: Inclua um arquivo README com um texto de até 10 frases explicando sua abordagem, estilo de codificação e padrões de design adotados para este projeto.

- Dependências: Você pode utilizar bibliotecas de terceiros conforme preferir para facilitar o desenvolvimento.

- Paginação: Implemente paginação para a lista de Pokémons ou descrições, garantindo melhor usabilidade.

- Injeção de dependência: Utilize esse padrão para gerenciar serviços e dependências no seu código.

- Favoritos: Permita que o usuário marque Pokémons como favoritos em uma lista específica.

- Responsividade: Adapte a interface para funcionar adequadamente em diferentes orientações de dispositivos móveis (modo retrato e paisagem).

- Diferenciais (não obrigatórios, mas que farão seu projeto se destacar):
- Documentação técnica detalhada.
- Implementação de WebHooks.
- Inclusão de mídia no repositório (imagens, vídeos ou GIFs) para demonstrar funcionalidades.
- Testes unitários cobrindo partes importantes do código.

## Tecnologias Utilizadas <br/>

- Angular: Framework JavaScript utilizado para a construção da aplicação.
- TypeScript: Linguagem utilizada para o desenvolvimento da lógica da aplicação.
- PokeAPI: API pública utilizada para buscar informações sobre os Pokémons.
- CSS: Estilização da interface. <br/>

## Teste - Dominio

Criei um subdomínio dentro do site de hospedagens Hostgator para testes, segue o link: </br>
http://aevo.iasminmarques.com.br

- Comparador de Status </br>
  https://aevo.iasminmarques.com.br/comparar

## Como Executar o Projeto Localmente <br/>

1. Clonar o repositório

```
git clone https://github.com/iasminimp/poke-bsn.git
```

2. Instalar as dependencias:

```
npm install
```

3. Rodar o projeto:

```
ng serve
```

4. Acesse: `http://localhost:4200`

## Componentes <br/>

### ListaPokemonComponent

- Busca dinâmica por nome
- Exibe nome e imagem dos Pokémons
- Navega para a tela de detalhes <br/>

### DetalhesPokemonComponent <br/>

- Exibe altura, peso, tipos e todos os stats
- Mostra a soma total de stats
- Botão para voltar à home (nav-bar e “X”)

### ComparadorComponent <br/>

- Busca e seleciona dois Pokémons
- Exibe seus status totais e imagem
- Indica o vencedor com destaque visual
- Exibe mensagem de erro caso não selecione os dois <br/>

## API

Link da API: https://pokeapi.co/ </br>
Documentação da API: https://pokeapi.co/docs/v2

### Fase de Testes

Exemplo de requisições feitas e rotas

- Uma chamada da API para trazer 151 pokemons

```
https://pokeapi.co/api/v2/pokemon/?limit=151
```

- Uma chamada da API para trazer mais informações do pokemon 4 - Charmander

```
https://pokeapi.co/api/v2/pokemon/4/
```

- Listagem de todos os Pokémon (limit=1000 define o número máximo de resultados
  retornados)

```
https://pokeapi.co/api/v2/pokemon?limit=1000
```

- Detalhes de um Pokémon específico (Exemplo: pikachu e ditto)

```
https://pokeapi.co/api/v2/pokemon/{nome-do-pokemon}
```

## Funções para se adicionar futuramente

- Infinity scroll (adicionar paginação): atualmente a pesquisa está limitada com um
  numero de Pokémon
- Melhorar o designer/ padronizar: questões de UX/ UI da aplicação;
- Loading Spinner/ carregando: estiver buscando Pokémons, exibir um loading para dar
  uma maior fluidez;
- Em detalhes do pokemon: gráficos de radar ou barra para as estatísticas, a exibição de
  evoluções do Pokémon;
