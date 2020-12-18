import { Alert } from 'dto/ServerResponseDTO';
import React, { MouseEvent, useCallback } from 'react';
import { IoMdAlert, IoMdArrowRoundForward, IoMdWarning } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { formatTimestamp } from 'utils';

import { Container, Table } from './styles';

interface AlertsListProps {
  alerts: Alert[];
}

const alertsColors = {
  error: '#ffe9ee',
  warning: '#ffc',
  // nothing: '#fff',
};

const alertsIcons = {
  error: <IoMdAlert color="#f00" size={22} />,
  warning: <IoMdWarning color="#c0c000" size={22} />,
  // nothing: <></>,
};

const AlertsList: React.FC<AlertsListProps> = ({ alerts }: AlertsListProps) => {
  const history = useHistory();

  const handleUserClick = useCallback(
    (event: MouseEvent, userId: number) => {
      // event.preventDefault();
      history.push(`/users/${userId}`);
    },
    [history],
  );

  return (
    <Container>
      <h3>Últimos Alertas</h3>
      {(alerts.length && (
        <div>
          <Table>
            <thead>
              <tr>
                <th style={{ width: '5%', textAlign: 'center' }}> </th>
                <th style={{ width: '15%' }}>Horário</th>
                <th style={{ width: '25%' }}>Paciente</th>
                <th>Mensagem</th>
                <th style={{ width: '3%' }}> </th>
              </tr>
            </thead>

            <tbody>
              {alerts
                .slice(0)
                .reverse()
                .map(alert => (
                  <tr
                    key={alert.id}
                    onClick={e => handleUserClick(e, alert.pacientId)}
                    style={{ backgroundColor: alertsColors[alert.type] }}
                  >
                    <td style={{ textAlign: 'center' }}>
                      {alertsIcons[alert.type]}
                    </td>
                    <td>{formatTimestamp(alert.timestamp)}</td>
                    <td>{alert.pacientName}</td>
                    <td>{alert.message}</td>
                    <td style={{ textAlign: 'center' }}>
                      <IoMdArrowRoundForward color="green" size={20} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )) || <h2 style={{ padding: 30 }}>Nenhum alerta até o momento.</h2>}
      <div />
    </Container>
  );
};

export default AlertsList;
