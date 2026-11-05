# GameVerse

O **GameVerse** é um portal fictício sobre videogames, com notícias, análises, lançamentos, uma galeria de imagens e um canal de contato. O projeto foi desenvolvido como uma referência didática completa, visualmente consistente e fácil de apresentar em sala de aula.

## Objetivo pedagógico

O projeto reúne, em uma única experiência, os principais conteúdos de um módulo introdutório de Desenvolvimento Front-End. A proposta é mostrar como HTML, CSS, Bootstrap e JavaScript podem trabalhar juntos sem criar uma estrutura complexa ou difícil de compreender.

Todo o conteúdo editorial e todos os jogos apresentados são fictícios.

## Tecnologias utilizadas

- HTML5 para estrutura e semântica;
- CSS3 para identidade visual, layout e responsividade;
- Bootstrap 5 para o sistema de grid, menu responsivo e classes utilitárias;
- Bootstrap Icons para os ícones da interface;
- JavaScript Vanilla para filtros, atualização do ano, confirmação do formulário e botão de retorno ao topo.

O projeto não utiliza processo de compilação, gerenciador de pacotes ou servidor de aplicação.

## Estrutura de pastas

```text
/
├── index.html
├── noticias.html
├── galeria.html
├── contato.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── img/
│   │   ├── colonia-vermelha.webp
│   │   ├── corrida-orbita.webp
│   │   ├── ecos-de-aurea.webp
│   │   ├── esquadrao-nexo.webp
│   │   ├── hero-gameverse.webp
│   │   └── fontes/
│   │       └── arquivos PNG em alta resolução
│   └── icons/
│       └── favicon.svg
└── README.md
```

## Páginas e funcionalidades

### Início

- apresentação principal do portal;
- ranking de assuntos em alta;
- cards de jogos em destaque;
- notícias recentes;
- chamada visual para a galeria.

### Notícias

- manchete principal;
- cards com data e categoria;
- filtro simples por categoria;
- lista de conteúdos mais lidos;
- tabela semântica com a agenda da semana.

### Galeria

- grid responsivo de imagens;
- legendas e textos alternativos;
- itens com diferentes proporções;
- filtro por cenários, personagens e conteúdo competitivo.

### Contato

- formulário completo com campos de texto, e-mail, seleção e caixas de marcação;
- validação nativa do navegador;
- mensagem local de confirmação, sem envio de dados;
- informações fictícias de atendimento.

Todas as páginas possuem menu responsivo, rodapé, link para pular ao conteúdo e botão de retorno ao topo.

## Como executar

1. Abra o arquivo `index.html` em um navegador moderno.
2. Use o menu principal para navegar entre as páginas.

Também é possível abrir a pasta com a extensão **Live Server** de um editor de código. Como o Bootstrap e os ícones são carregados por CDN, é necessário ter conexão com a internet para que esses recursos sejam exibidos.

## Organização do código

- Os documentos HTML utilizam elementos semânticos como `header`, `nav`, `main`, `section`, `article`, `aside`, `figure` e `footer`.
- O arquivo `assets/css/style.css` é dividido por áreas da interface e concentra as variáveis de cor, tipografia e espaçamento.
- O Bootstrap é utilizado de forma moderada e complementado por classes próprias do projeto.
- O arquivo `assets/js/script.js` contém funções pequenas e independentes para cada interação.
- As imagens WebP ficam armazenadas no próprio projeto e possuem dimensões declaradas no HTML. Os PNGs em alta resolução são mantidos na pasta `assets/img/fontes`.

## Conceitos demonstrados

- estrutura completa de documentos HTML;
- hierarquia de títulos e conteúdo semântico;
- links internos e navegação entre páginas;
- tipografia, cores, espaçamento e Box Model;
- cards, botões, listas, formulários e tabelas;
- Flexbox e CSS Grid;
- variáveis CSS, pseudo-classes e seletores de atributos;
- responsividade com Bootstrap e Media Queries;
- acessibilidade com textos alternativos, rótulos, foco visível e atributos ARIA;
- interações curtas com JavaScript Vanilla;
- organização de arquivos e reaproveitamento de estilos.

## Contexto educacional

Este projeto foi criado como referência para um curso introdutório de Front-End baseado em HTML, CSS e Bootstrap. Sua organização prioriza leitura, clareza e evolução incremental durante as aulas.
