function processForm() {
  const timestamp = Date.now();
  const pacientIdd = parseInt(document.getElementById('paciente').value);
  const dataBtm = parseFloat(document.getElementById('btm').value.replace(',', '.'));
  const dataPa = parseFloat(document.getElementById('pa').value.replace(',', '.'));
  const dataTpc = parseFloat(document.getElementById('tpc').value.replace(',', '.'));
  fetch("http://localhost:3333/pacients/" + pacientIdd, {
    method: 'PATCH',
    body: JSON.stringify({
      sensor1: dataBtm,
      sensor2: dataPa,
      sensor3: dataTpc,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  fetch("http://localhost:3333/measures/", {
    method: 'POST',
    body: JSON.stringify({
      pacientId: pacientIdd,
      timestamp: timestamp,
      sensor1: dataBtm,
      sensor2: dataPa,
      sensor3: dataTpc,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Call allerts
  const condBtm = dataBtm > 99.9; // Batimentos cardíacos anormais. 
  const condBtmE = dataBtm > 119.9; // Batimentos cardíacos muito rápidos! 
  const condPaB = dataPa < 100.1; // Pressão sanguínea muito baixa! 
  const condPaE = dataPa > 139.9; // Pressão sanguínea muito alta! 
  const condTpc = dataTpc > 37.7; // Temperatura corporal anormal. 
  const condTpcE = dataTpc > 38.9; // Temperatura corporal muito alta! 

  if (condBtm || condPa || condTpc || condBtmE || condPaE || condTpcE) {
    alertMessage = '';
    alertType = 'warning';

    if (condBtmE) {
      alertMessage += 'Batimentos cardíacos muito rápidos! ';
    } else {
      if (condBtm) {
        alertMessage += 'Batimentos cardíacos anormais. ';
        alertType = 'error'
      }
    }
    if (condPaE) {
      alertMessage += 'Pressão sanguínea muito alta! ';
    } else {
      if (condPaB) {
        alertMessage += 'Pressão sanguínea muito baixa! ';
        alertType = 'error'
      }
    }
    if (condTpcE) {
      alertMessage += 'Temperatura corporal muito alta! ';
    } else {
      if (condition2) {
        alertMessage += 'Temperatura corporal anormal. ';
        alertType = 'error'
      }
    }

    fetch("http://localhost:3333/alerts", {
      method: 'POST',
      body: JSON.stringify({
        type: alertType,
        pacientId: pacientIdd,
        timestamp: timestamp,
        message: alertMessage,
        seen: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
  });
  }

  return false;
}
