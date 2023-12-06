# Aplicativo de Previsão do Tempo em React Native
Este é um exemplo de um aplicativo simples de previsão do tempo desenvolvido em React Native. O aplicativo permite aos usuários inserir o nome de uma cidade e buscar a previsão do tempo para essa cidade usando a API do OpenWeatherMap.

## Estrutura do Projeto
O projeto é organizado da seguinte forma:

### PrevisaoTempo.js:

Este é o componente funcional que representa a tela de previsão do tempo.
Permite ao usuário inserir o nome da cidade, buscar a previsão do tempo e exibir os resultados.
Utiliza estados para armazenar a cidade inserida, os dados da previsão e o status de carregamento.
Chama a função buscarPrevisao quando o usuário clica no botão "Buscar Previsão."

### HomeScreen.js:

Este é o componente funcional que representa a tela principal do aplicativo.
Importa o componente PrevisaoTempo para renderizá-lo na tela.

### API.js:

Contém a lógica para buscar a previsão do tempo de uma cidade usando a API do OpenWeatherMap.
Define uma chave de API (apiKey) e a URL base da API.
Exporta uma função buscarPrevisaoDoTempo que recebe o nome da cidade como parâmetro, faz uma solicitação à API e retorna os dados da previsão.

### App.js:

Este é o componente principal da aplicação que importa o componente HomeScreen e o renderiza.
Envolve o HomeScreen com uma View para definir a aparência da tela principal.

## Configuração da Chave da API
Antes de executar o aplicativo, certifique-se de substituir 'YOUR_API_KEY' pela sua chave de API correta do OpenWeatherMap no arquivo API.js.

## Executando o Aplicativo
Siga os passos abaixo para executar o aplicativo:
* npm install
* npm run web

## Recursos

### OpenWeatherMap API: https://openweathermap.org/
Este aplicativo de previsão do tempo serve como um exemplo simples de como criar uma aplicação em React Native que se comunica com uma API de previsão do tempo. Você pode expandi-lo e personalizá-lo de acordo com suas necessidades.