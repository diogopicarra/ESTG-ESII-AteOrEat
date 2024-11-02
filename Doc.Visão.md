Objetivo - Este sistema consiste num chatbot interativo que permite aos utilizadores descobrir receitas culinárias com base nos ingredientes que têm à sua disposição. O chatbot irá sugerir receitas, fornecer instruções passo a passo e oferecer dicas sobre como utilizar os ingredientes disponíveis de forma criativa.

Escopo - O sistema poderá ser utilizado em diversos contextos, incluindo:
- Residências
- Escolas de culinária
- Restaurantes
- Serviços de entrega de ingredientes
- Plataformas de redes sociais

Partes Interessadas (Stakeholders)
- Utilizadores finais: pessoas que cozinham em casa ou que desejam explorar novas receitas.
- Cozinheiros profissionais: chefs que buscam inspiração ou maneiras de utilizar ingredientes que sobram.
- Empresas de alimentos: marcas que podem beneficiar ao promover receitas com os seus produtos.
- Educadores: professores em escolas de culinária que utilizam o sistema como ferramenta de ensino.


Equipa do Projeto:
- Catarina Valério (nº58546)
- Diogo Piçarra (nº60589)
- Lourenço Correia (nº60983)
- João Montalvão (nº60965)
- Rodrigo Pereira (n60608)

Características do Sistema – Lista de Funcionalidades:
- Consulta de Receitas: os utilizadores podem inserir os ingredientes disponíveis e receber sugestões de receitas.
- Instruções Interativas: o chatbot fornecerá passos detalhados para cada receita.
- Dicas e Substituições: sugestões sobre como substituir ingredientes ou fazer adaptações nas receitas.
- Favoritos: funcionalidade para que os utilizadores salvem receitas preferidas.
- Avaliações: permitir que os utilizadores avaliem e comentem sobre as receitas.

Arquitetura de Referência
+--------------------------------+
|          Interface do          |
|            Utilizador          |
|         (Web/Móvel)            |
+--------------------------------+
              |
              v
+--------------------------------+
|         Chatbot de LLM         |
+--------------------------------+
              |
              v
+--------------------------------+
|    Banco de Dados de Receitas  |
+--------------------------------+
              |
              v
+--------------------------------+
|         Integração de          |
|   API de Ingredientes/Alimentos|
+--------------------------------+
Interface do Utilizador (Web/Móvel):
Onde os utilizadores interagem com o sistema, inserindo ingredientes e recebendo sugestões de receitas.

Chatbot de LLM:
O núcleo do sistema que processa as entradas dos utilizadores, gerando respostas e sugestões com base nos ingredientes disponíveis.

Banco de Dados de Receitas:
Armazena uma vasta gama de receitas, incluindo detalhes sobre ingredientes, instruções e avaliações.

Integração de API de Ingredientes/Alimentos:
Permite que o sistema aceda a informações sobre ingredientes, como disponibilidade, preços e substituições.



Restrições do Produto
Limitações de ingredientes: o sistema pode não reconhecer certos ingredientes ou combinações.
Dependência de conexão à internet para acessar o chatbot.
Limitações na base de dados de receitas, podendo não incluir todas as opções culturais ou dietéticas.
Requisitos de compatibilidade com diferentes dispositivos e sistemas operativos.


Integração LLM
A integração do modelo de linguagem (LLM) será utilizada para:
- Processamento de linguagem natural: compreender e interpretar as entradas dos utilizadores sobre os ingredientes disponíveis.
- Geração de texto: criar respostas e sugestões de receitas de forma natural e intuitiva.
- Aprimoramento contínuo: o LLM pode ser ajustado com feedback dos utilizadores para melhorar as suas recomendações e respostas ao longo do tempo.
- Contextualização: entender o contexto das conversas para oferecer sugestões mais relevantes, considerando preferências dietéticas e restrições alimentares.
- Considerações FinaisO sistema de chatbot de receitas de culinária tem o potencial de facilitar a experiência culinária dos utilizadores, promovendo a criatividade na cozinha e a utilização eficiente dos ingredientes disponíveis.
