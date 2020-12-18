const apiUrl = 'https://safenine.herokuapp.com';

function processForm() {
  const timestamp = Date.now();
  const pacientIdd = parseInt(document.getElementById('paciente').value, 10);
  const dataBtm = parseFloat(
    document.getElementById('btm').value.replace(',', '.'),
  );
  const dataPa = parseFloat(
    document.getElementById('pa').value.replace(',', '.'),
  );
  const dataTpc = parseFloat(
    document.getElementById('tpc').value.replace(',', '.'),
  );
  fetch(`${apiUrl}/pacients/${pacientIdd}`, {
    method: 'PATCH',
    body: JSON.stringify({
      sensor1: dataBtm,
      sensor2: dataPa,
      sensor3: dataTpc,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  fetch(`${apiUrl}/measures/`, {
    method: 'POST',
    body: JSON.stringify({
      pacientId: pacientIdd,
      timestamp,
      sensor1: dataBtm,
      sensor2: dataPa,
      sensor3: dataTpc,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Call allerts
  const condBtm = dataBtm > 99.9; // Batimentos cardíacos anormais.
  const condBtmE = dataBtm > 119.9; // Batimentos cardíacos muito rápidos!
  const condPaB = dataPa < 100.1; // Pressão sanguínea muito baixa!
  const condPaE = dataPa > 139.9; // Pressão sanguínea muito alta!
  const condTpc = dataTpc > 37.7; // Temperatura corporal anormal.
  const condTpcE = dataTpc > 38.9; // Temperatura corporal muito alta!

  let alertMessage = '';
  let alertType = 'nothing';

  if (condBtmE) {
    alertMessage += 'Batimentos cardíacos muito rápidos! ';
    alertType = 'error';
  } else if (condBtm) {
    alertMessage += 'Batimentos cardíacos anormais. ';
    alertType = 'warning';
  }
  if (condPaE) {
    alertMessage += 'Pressão sanguínea muito alta! ';
    alertType = 'error';
  } else if (condPaB) {
    alertMessage += 'Pressão sanguínea muito baixa! ';
    alertType = 'warning';
  }
  if (condTpcE) {
    alertMessage += 'Temperatura corporal muito alta! ';
    alertType = 'error';
  } else if (condTpc) {
    alertMessage += 'Temperatura corporal anormal. ';
    alertType = 'warning';
  }

  if (alertType != 'nothing') {
    fetch(`${apiUrl}/alerts`, {
      method: 'POST',
      body: JSON.stringify({
        type: alertType,
        pacientId: pacientIdd,
        timestamp,
        message: alertMessage,
        seen: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return false;
}
