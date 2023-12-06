# Aplicativo de Controle de Despesas em React Native
Este é um aplicativo de exemplo em React Native que permite aos usuários adicionar despesas e visualizar a lista de despesas. Ele segue o padrão Model-View-Controller (MVC) para separar a lógica de negócios, a representação de dados e a interface do usuário.

## Estrutura do Código
O código-fonte do aplicativo é organizado em três partes principais:

### Model (Modelo)
O arquivo DespesaModel.js define a estrutura de dados para representar uma despesa. Ele inclui atributos como descrição, valor e data de vencimento.

### Controller (Controlador)
O arquivo DespesaController.js controla a lógica de negócios relacionada às despesas. Ele mantém um array de despesas e fornece métodos para adicionar despesas e obter a lista de despesas.

### View (Visualização)
O arquivo DespesaForm.js é um componente de formulário que permite aos usuários inserir os detalhes de uma despesa, como descrição, valor e data de vencimento. Quando o botão "Adicionar Despesa" é pressionado, ele chama uma função para adicionar a despesa.

O arquivo ListaDespesas.js é um componente que exibe a lista de despesas na tela. Ele recebe um array de despesas como propriedade e exibe essas despesas.

## Componente de Aplicação Principal
O arquivo App.js é o componente principal da aplicação. Ele integra os componentes DespesaForm e ListaDespesas.

O método handleAdicionarDespesa é chamado quando o usuário adiciona uma nova despesa no DespesaForm. Ele adiciona a despesa ao controlador e atualiza o estado com a lista de despesas atualizada.

## Uso
Certifique-se de ter o ambiente de desenvolvimento React Native configurado em seu sistema.

Clone ou faça o download deste repositório.

Navegue até a pasta do projeto e execute o comando npm install para instalar as dependências.

Execute o aplicativo com npm run web.