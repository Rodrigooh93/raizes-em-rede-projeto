# Validação final — Raízes em Rede v5

## Fluxo a comprovar
1. Inicie `npm install` e `npm run dev` (Node 22).
2. Acesse `http://localhost:3333/health` e `http://localhost:3333/docs`.
3. Cadastre cliente e faça login.
4. Crie pedido com pagamento APROVADO; registre código e itens.
5. Consulte em **Meu pedido** e **Meus pedidos**.
6. Crie outro pedido com pagamento NEGADO; confirme status PAGAMENTO_RECUSADO.
7. Saia, entre como gerente de demonstração (credenciais apenas no README local), abra **Painel da equipe**, carregue pedidos e altere RECEBIDO → PREPARANDO → PRONTO → FINALIZADO.
8. Confira que pedido recusado não permite avanço de status.
9. Execute coleção Postman e salve resultados e capturas de tela (sem senhas ou tokens).
10. Verifique responsividade, navegação por teclado, erros de validação e conexão.

## Segurança / LGPD
- Demonstração acadêmica local; não publicar dados reais.
- Senhas com hash bcrypt, autenticação JWT, verificação de usuário e perfis no servidor.
- Registro de auditoria na criação de pedidos e atualização de status.
- Pendências para produção: gestão de consentimento/base legal, retenção e anonimização, HTTPS, segredo JWT obrigatório, rate limiting, revisão de dependências e credenciais de demonstração.
- A simulação de APP/TOTEM/BALCAO registra o canal, mas **não** implementa interfaces independentes desses canais.

## Evidências a incluir no PDF
Capturas do cadastro, cardápio, carrinho, pagamento aprovado/negado, pedido com itens, painel da equipe e mudança de status, Swagger, testes Postman e repositório público. Informe datas e resultados reais. Não afirmar testes não executados.
