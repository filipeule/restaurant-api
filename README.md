## RESTAURANT API

### DESCRIÇÃO

Esse projeto tem a finalidade de servir uma página front-end de um restaurante, que tem a necessidade de expor aos seus clientes o cardápio semanal, para melhor eles se organizarem com o que o restaurante estará oferecendo, sabendo assim o melhor dia que eles queiram ir ao restaurante.

### FUNCIONALIDADES

A função dessa API é gerar cardápios para cada dia da semana em que ele foi gerado. Esses cardápios são gerados a partir de produtos armazenados na base de dados do projeto. Cada produto tem seu grupo alimentar, podendo ser, por exemplo, carne bovína, carne suína, legumes, massas, vegetais, etc. Cada cardápio é balanceado, possuindo três tipos de carnes: Carne bovina, carne de frango e carne suína, três tipos de acompanhamentos a essas carnes, sendo: um tipo de legume, um tipo de massa e um tipo de caldo, além de duas opções de saladas, sendo um tipo de vegetal e um tipo de folha.

Os cardápios podem ser gerados no fim de semana, onde eles vão ser gerados com a data da próxima semana, ou podem ser gerados no meio da semana, onde ele irá gerar cardápios para esse dia específico mais os outros dias que sobraram da semana.

### TECNOLOGIAS

Nesse projeto, estou utilizando NodeJS com ES Modules como ferramenta, utilizando Express para gerenciamento das requisições HTTP, Bcryptjs para encriptação da senha do admin e JWT para criação do token para acesso as rotas de produtos.

### INICIALIZAÇÃO

Após baixar o projeto, você deve executar os comandos:

Para baixar as dependências:
  - npm install

Para rodar o servidor:
  - npm start

### IMPLEMENTAÇÕES FUTURAS

Ainda nesse projeto, pretendo adicionar testes unitários para melhor funcionalidade da aplicação e pipelines de CI/CD para automação do projeto.