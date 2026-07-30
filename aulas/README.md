# GameVerse — versões das aulas

## Apresentação

Esta pasta registra a evolução do **GameVerse** ao longo do curso de Front-End. Cada subpasta funciona como uma fotografia do projeto em um momento específico do módulo e pode ser aberta separadamente no navegador.

As versões são intencionalmente mais simples do que o projeto final. Assim, o professor pode apresentar cada conceito no momento adequado, sem antecipar conteúdos das aulas seguintes.

## Estrutura

```text
aulas/
├── aula-01/
│   ├── index.html
│   └── assets/img/
├── aula-02/
│   ├── index.html
│   └── assets/
│       ├── css/style.css
│       └── img/
├── aula-03/
│   ├── index.html
│   ├── noticias.html
│   ├── galeria.html
│   ├── contato.html
│   └── assets/
│       ├── css/style.css
│       └── img/
├── aula-04/
│   ├── index.html
│   ├── noticias.html
│   ├── galeria.html
│   ├── contato.html
│   └── assets/
│       ├── css/style.css
│       └── img/
└── README.md
```

- **`aula-01/`**: primeira página HTML, com títulos, parágrafos e imagens. Não possui CSS nem navegação.
- **`aula-02/`**: organiza o conteúdo em seções e introduz tipografia, listas, cores e espaçamentos em um arquivo CSS separado.
- **`aula-03/`**: cria as páginas do portal e apresenta links, navegação, âncoras internas e o estado `hover`, sem Flexbox, Grid ou Bootstrap.
- **`aula-04/`**: retoma a versão da aula anterior para revisar HTML, CSS, links e navegação antes da introdução a Git, GitHub e commits. Como o encontro não acrescenta recursos ao portal, seu código permanece igual ao da aula 3.

## Objetivo pedagógico

O material foi organizado para que:

- cada aula adicione novos recursos ao que já foi construído;
- os conteúdos acompanhem a progressão do módulo;
- o aprendizado aconteça por meio de um projeto prático;
- o portal final surja gradualmente, com decisões fáceis de observar e explicar.

## Relação entre as aulas

| Aula | Tema | Principais conteúdos |
|---|---|---|
| 1 | Primeira página e introdução à Web | Estrutura HTML, títulos, parágrafos e imagens |
| 2 | Organização de conteúdo e tipografia | CSS externo, hierarquia visual, seções, listas e espaçamento |
| 3 | Links e navegação | Menu, links entre páginas, âncoras internas e `hover` |
| 4 | Revisão do módulo e introdução ao Git | Revisão de HTML e CSS, correção de erros comuns, Git, GitHub, commits e primeira publicação |
| 5 | A definir | Espaço preparado para a próxima etapa |

Novas aulas devem ser adicionadas em pastas com o mesmo padrão de nomes, como `aula-05/` e `aula-06/`. Cada nova versão deve preservar o que já foi aprendido e acrescentar somente o conteúdo previsto para aquele encontro.

## Orientações para o professor

- Use os arquivos como referência e escreva o código junto com a turma, em vez de apenas entregar uma solução pronta.
- Comece cada encontro retomando rapidamente a versão anterior.
- Incentive os estudantes a adaptar textos, cores, imagens e nomes dos jogos.
- Mostre erros comuns, como caminhos incorretos, tags não fechadas e links que apontam para arquivos inexistentes.
- Teste os links durante a aula e peça que a turma explique a diferença entre links internos e links entre páginas.
- Compare a versão da aula com o projeto final para mostrar onde a sequência chegará, sem antecipar a implementação dos recursos futuros.
- Na aula 4, use a repetição intencional da versão anterior para revisar o código, demonstrar a correção de erros e explicar que um commit registra uma etapa importante da evolução do projeto.
- Ao preparar a próxima aula, copie a versão anterior e faça apenas as mudanças relacionadas ao novo tema.

## Como abrir uma versão

Entre na pasta da aula desejada e abra o arquivo `index.html` em um navegador. Também é possível utilizar uma extensão de servidor local no editor de código. Cada aula mantém seus próprios arquivos para não depender das outras versões.
