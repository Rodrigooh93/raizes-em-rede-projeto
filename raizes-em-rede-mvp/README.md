# Raízes em Rede

## Sobre o projeto

O Raízes em Rede é um projeto acadêmico desenvolvido para simular um sistema de pedidos de restaurante.

O sistema permite que clientes consultem o cardápio, realizem pedidos, simulem pagamentos e acompanhem o andamento de suas compras. Também possui uma área administrativa para gerenciamento de pedidos e funcionários.

O objetivo é aplicar conhecimentos de desenvolvimento Front-End e Back-End, integrando interface, API e banco de dados.

## Tecnologias utilizadas

**Front-End**
- React
- TypeScript
- Vite
- Axios
- HTML e CSS

**Back-End**
- Node.js
- Express
- TypeScript

**Banco de dados e ferramentas**
- SQLite
- JWT e bcrypt para autenticação
- Swagger para documentação da API
- Postman para testes de requisições

## Funcionalidades

### Área do cliente
- Cadastro e login.
- Consulta ao cardápio.
- Seleção de produtos e carrinho de compras.
- Realização de pedidos.
- Simulação de pagamento aprovado ou recusado.
- Consulta ao histórico e acompanhamento dos pedidos.

### Área administrativa
- Acesso com diferentes perfis de usuário.
- Painel do CHEFE para administração da equipe.
- Cadastro de gerentes e colaboradores.
- Consulta de funcionários cadastrados.
- Atualização do andamento dos pedidos por usuários autorizados.
- Controle de permissões conforme o cargo.

## Estrutura do projeto

```text
raizes-em-rede-mvp/
├── api/          # Back-End e banco de dados
├── web/          # Interface do sistema
├── docs/         # Documentação
├── postman/      # Coleção de testes
├── README.md
├── package.json
└── package-lock.json
```

## Como executar

É necessário ter Node.js e npm instalados.

Abra o terminal na pasta principal do projeto e execute:

```bash
npm install
npm run dev
```

Depois, acesse:

- **Site:** http://localhost:5173
- **API:** http://localhost:3333
- **Documentação Swagger:** http://localhost:3333/docs

Caso seja necessário iniciar separadamente:

```bash
npm run dev -w api
npm run dev -w web
```

Execute cada comando em um terminal diferente.

## Funcionamento do sistema

1. O cliente realiza seu cadastro e entra no sistema.
2. Escolhe os produtos disponíveis no cardápio.
3. Adiciona os itens ao carrinho e confirma o pedido.
4. Seleciona o resultado do pagamento simulado.
5. Consulta os detalhes e o andamento do pedido.
6. A equipe autorizada pode atualizar o status do pedido.
7. O CHEFE pode administrar o cadastro de funcionários.

## Segurança

O sistema utiliza autenticação com JWT e armazenamento de senhas com hash.

As funcionalidades administrativas possuem restrições de acesso conforme o perfil do usuário.

As configurações sensíveis são mantidas em variáveis de ambiente e não devem ser publicadas no GitHub.

## Testes

O projeto possui uma coleção Postman na pasta `postman`, destinada à verificação dos endpoints da API.

Também podem ser realizados testes pela interface, como cadastro, login, criação de pedidos, simulação de pagamento e gerenciamento da equipe.

## Limitações

Este é um projeto acadêmico demonstrativo.

- Os pagamentos são simulados e não envolvem dinheiro real.
- O banco de dados é local.
- O sistema não possui integração com serviços externos de pagamento ou entrega.
- Algumas funcionalidades administrativas podem ser ampliadas futuramente.

## Referências

Foram consultados materiais de apoio e exemplos públicos de projetos semelhantes:

- https://github.com/dimybruno94/rede-raizes
- https://github.com/paulohlimadacruz-hue/raizes-do-nordeste

## Considerações finais

O desenvolvimento do Raízes em Rede permitiu trabalhar conceitos de criação de interfaces, comunicação entre Front-End e Back-End, autenticação de usuários, banco de dados e organização de uma aplicação web.

O projeto demonstra um fluxo básico de pedidos para restaurante, com funcionalidades voltadas aos clientes e à equipe administrativa.
