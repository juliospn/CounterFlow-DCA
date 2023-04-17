window.addEventListener('DOMContentLoaded', (event) => {
  const ws = new WebSocket('wss://fstream.binance.com/ws/btcusdt@markPrice@1s');

  const fundingRateDisplay = document.getElementById('funding-rate');
  const fundingRateThresholdInput = document.getElementById('fundingRateThreshold');
  const saveButton = document.getElementById('saveButton');

  ws.addEventListener('message', function (event) {
    const parsedData = JSON.parse(event.data);
    const markPrice = parsedData.p;
    const fundingRate = parsedData.r;

    // Exibir o preço e o funding rate na interface da extensão
    document.getElementById('price').textContent = '$ ' + parseFloat(markPrice).toFixed(2);

    // Adicionar a classe "negative" ao elemento "funding-rate" se o funding rate for negativo, adicionar a classe "positive" caso contrário
    fundingRateDisplay.classList.remove('negative');
    fundingRateDisplay.classList.remove('positive');
    if (fundingRate < 0) {
      fundingRateDisplay.classList.add('negative');
    } else if (fundingRate > 0) {
      fundingRateDisplay.classList.add('positive');
    }

    // Exibir o funding rate na interface da extensão com duas casas decimais e um "+" na frente se o valor for maior que zero
    fundingRateDisplay.textContent = `${fundingRate >= 0 ? '+' : ''}${(fundingRate * 100).toFixed(5)}%`;

    // Atualizar a descrição da extensão com as informações de preço e funding rate
    chrome.browserAction.setTitle({
      title: `Bitcoin Price: $ ${parseFloat(markPrice).toFixed(2)} | Funding Rate: ${(fundingRate * 100).toFixed(4)}%`
    });
  });

  ws.addEventListener('error', function(event) {
    console.error('WebSocket error:', event);
  });

  ws.addEventListener('close', function(event) {
    console.warn('WebSocket closed:', event);
  });

  saveButton.addEventListener('click', function() {
    const fundingRateThreshold = parseFloat(fundingRateThresholdInput.value);
    if (!isNaN(fundingRateThreshold)) {
      chrome.storage.sync.set({ fundingRateThreshold }, function() {
        console.log('Saved funding rate threshold:', fundingRateThreshold);
      });
    } else {
      console.warn('Invalid funding rate threshold:', fundingRateThresholdInput.value);
    }
  });
});
