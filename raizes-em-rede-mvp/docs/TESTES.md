# Roteiro inicial de validação do MVP

| ID | Ação | Resultado esperado |
|---|---|---|
| T01 | Abrir o Front-End em celular | Layout adaptável, sem rolagem horizontal. |
| T02 | Listar unidades | Duas unidades demonstrativas aparecem. |
| T03 | Selecionar outra unidade | Cardápio é recarregado e carrinho reiniciado. |
| T04 | Consultar cardápio | Produtos, categorias, preços e disponibilidade aparecem. |
| T05 | Criar conta com dados válidos | Cliente é cadastrado. |
| T06 | Entrar com credenciais válidas | Token JWT é emitido. |
| T07 | Entrar com senha inválida | API retorna 401. |
| T08 | Criar pedido autenticado | Pedido é salvo com total calculado pelo servidor. |
| T09 | Criar pedido sem token | API retorna 401. |
| T10 | Criar pedido com pagamento negado | Pedido fica PAGAMENTO_RECUSADO. |
| T11 | Solicitar produto indisponível/estoque insuficiente | API retorna 409. |
| T12 | Repetir chave Idempotency-Key | API retorna o pedido existente sem duplicá-lo. |
| T13 | Consultar pedido próprio | Dados do pedido são retornados. |
| T14 | Cliente consultar pedido de outro usuário | API retorna 403. |
| T15 | Cliente tentar atualizar estoque/status | API retorna 403. |
| T16 | Gerente atualizar transição válida de status | Status é alterado e auditado. |

Registre data, ambiente, resultado real, evidência (captura ou resposta) e observações após executar cada teste. Esta tabela é um roteiro; não representa resultados já obtidos.
