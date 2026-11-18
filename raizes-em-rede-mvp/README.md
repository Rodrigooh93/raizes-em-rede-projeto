# Raízes em Rede — MVP acadêmico

MVP integrado para demonstrar o fluxo de consulta de unidades/cardápio, cadastro e login, carrinho, criação de pedido, pagamento simulado e acompanhamento. O projeto é fictício e não processa pagamentos reais.

## Tecnologias
- Front-End: React 18, TypeScript, Vite e Axios.
- Back-End: Node.js, Express e TypeScript.
- Banco de dados: SQLite (`better-sqlite3`), criado automaticamente em `api/data/raizes.sqlite`.
- Autenticação: JWT e senha armazenada com hash bcrypt.
- Documentação: Swagger UI e OpenAPI 3.1.
- Testes manuais: coleção Postman em `postman/Raizes_em_Rede.postman_collection.json`.

## Requisitos
- Node.js 20 ou superior (recomendado).
- npm 10 ou superior.

## Como executar
Abra um terminal na pasta raiz do projeto:

```bash
npm install
npm run dev
```

A interface ficará em `http://localhost:5173` e a API em `http://localhost:3333`.

Se preferir executar separadamente:

```bash
npm run dev -w api
npm run dev -w web
```

## Acessos e dados de demonstração
A API cria automaticamente duas unidades e cinco produtos fictícios no primeiro início. Também cria um usuário de gerente para testar operações administrativas:

- E-mail: `gerente@raizesemrede.local`
- Senha: `Raizes123!`

Crie clientes pela opção “Criar conta” no Front-End ou pelo endpoint `POST /auth/register`.

> Credenciais de demonstração: não reutilize em produção. A chave JWT padrão também deve ser substituída antes de qualquer publicação.

## Endereços úteis
- Front-End: `http://localhost:5173`
- API: `http://localhost:3333`
- Verificação: `http://localhost:3333/health`
- Swagger: `http://localhost:3333/docs`
- OpenAPI JSON: `http://localhost:3333/openapi.json`

## Fluxo de demonstração
1. Inicie API e Front-End.
2. No site, crie uma conta de cliente e entre.
3. Selecione uma unidade e adicione itens ao carrinho.
4. Confirme o pedido. O servidor recalcula os preços com base no banco.
5. A tela apresenta o código do pedido e o resultado de pagamento simulado.
6. Use o código em “Acompanhe seu pedido”.
7. Para testar funções de gerente, autentique-se com a conta de demonstração e use a coleção Postman.

## Regras implementadas no MVP
- O servidor calcula o total; o navegador não envia preço como valor confiável.
- Pedido exige unidade, canal (`SITE`, `APP`, `TOTEM`, `BALCAO`) e itens válidos.
- Produto indisponível ou estoque insuficiente impede a criação.
- A chave `Idempotency-Key` evita criar novamente um pedido com a mesma chave.
- Pagamento é simulado como `APROVADO` ou `NEGADO`.
- Cliente consulta somente seus próprios pedidos; perfis operacionais têm permissões específicas.
- Transições de status são validadas no servidor e registradas em auditoria.

## Testes
Importe a coleção `postman/Raizes_em_Rede.postman_collection.json` no Postman. Execute o login de gerente antes dos endpoints protegidos. Os IDs de unidade/produto e de pedido podem precisar ser ajustados conforme a base de dados local.

## Limitações conhecidas do MVP
- O pagamento é mock e não captura dinheiro real.
- O estoque é validado no pedido, mas a baixa automática de estoque ainda não está ativada.
- Não há recuperação de senha, envio de e-mail, integração fiscal, logística, gateway de pagamento ou publicação em nuvem.
- O painel administrativo visual completo e a gestão de produtos ainda podem ser ampliados.
- O banco local é SQLite; para produção, deve ser avaliada uma solução gerenciada, backups, migrações e controles adicionais.
- O Swagger inicial descreve os principais endpoints e pode ser ampliado para documentar todos os esquemas e respostas.

## Segurança e publicação
Antes de publicar: definir `JWT_SECRET` forte em variável de ambiente, restringir CORS ao domínio real, usar HTTPS, revisar logs, política de privacidade e LGPD, configurar backup e executar testes de segurança. Não incluir `.env`, tokens ou dados pessoais reais no repositório.

## Relação com o relatório acadêmico
Este repositório é uma implementação demonstrativa inicial da proposta. Atualize o relatório para refletir as funcionalidades efetivamente testadas no ambiente da disciplina. Não declare testes, deploy ou integrações que não tenham sido realizados.


## Melhorias da versão 2
- Cadastro de cliente seguido de login automático, com mensagem explícita para e-mail duplicado.
- Consulta de pedido com orientação para autenticação e painel de resultado.
- Listagem dos pedidos do cliente autenticado via `GET /me/pedidos`.
- Opção de simular pagamento aprovado ou recusado. Não há cobrança real.
- Fluxos inspirados em referências públicas, com implementação própria e adaptação ao MVP.

### Referências consultadas
- https://github.com/dimybruno94/rede-raizes/blob/main/02-DIAGRAMAS_UML.md
- https://github.com/paulohlimadacruz-hue/raizes-do-nordeste/tree/main/rede-raizes

### Atenção
A versão 2 não deve ser apresentada como totalmente testada sem executar os cenários localmente.


## Atualização v4: cardápio e histórico detalhado

- Cardápio demonstrativo ampliado para **22 produtos**, entre pratos regionais, acompanhamentos, bebidas, sobremesas e snacks.
- A lista **Meus pedidos** permite selecionar um pedido e consultar seus itens, quantidades, preços unitários, subtotais, total e situação.
- Os produtos são incluídos no banco automaticamente ao iniciar a API, sem apagar os registros anteriores (inserção somente se o nome ainda não existir).
- **Preservar pedidos antigos:** a base SQLite fica em `data/raizes.sqlite` relativa à pasta de onde se executa `npm run dev`. Se for instalar em outra pasta, com o servidor desligado, copie a pasta `data` do projeto anterior para a pasta raiz do novo projeto **antes** de iniciar a versão v4. Faça uma cópia de segurança primeiro. Não substitua uma base nova que contenha dados importantes.
- Valores e endereços são fictícios; pagamento é apenas simulado.
