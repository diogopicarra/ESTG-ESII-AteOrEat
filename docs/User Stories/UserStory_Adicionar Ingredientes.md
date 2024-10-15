# Adicionar ingredientes
**Como**  Utilizador  
**Quero**  Inserir os ingredientes que tenho em casa  
**Para**  Que o chatbot me sugira receitas que posso cozinhar com eles.

## Critérios de Aceitação
1. **Adicionar Ingredientes**:
   - O utilizador deve ser capaz de adicionar os ingredientes de forma manual através de um campo de texto ou seleção de uma lista de ingredientes pré-definidos.
   - O sistema deve permitir a adição de múltiplos ingredientes de uma vez.
   - Se o utilizador tentar adicionar um ingrediente que não existe na base de dados, deve ser exibida uma mensagem de erro clara.

2. **Validação de Ingredientes**:
   - O sistema deve verificar se os ingredientes adicionados são válidos e fazem parte da base de dados.
   - Ingredientes duplicados não devem ser permitidos. Se o utilizador tentar adicionar o mesmo ingrediente mais de uma vez, deve ser exibida uma mensagem de aviso.
