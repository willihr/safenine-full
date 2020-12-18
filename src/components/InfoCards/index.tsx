import React from 'react';
import { MdWarning, MdAccountCircle, MdMessage } from 'react-icons/md';
import { VscDebugDisconnect } from 'react-icons/vsc';

import { Container, InfoCard } from './styles';

interface InfoCardsProps {
  connectionStatus: boolean;
  pacientsCount: number;
  messagesCount: number;
  alertsCount: number;
}

const InfoCards: React.FC<InfoCardsProps> = ({
  connectionStatus,
  pacientsCount,
  messagesCount,
  alertsCount,
}: InfoCardsProps) => {
  return (
    <Container>
      <InfoCard color="#4E73DF">
        <div>
          <span>Status de conexão à central</span>
          <strong style={{ color: connectionStatus ? 'green' : 'yellowgreen' }}>
            {connectionStatus ? 'OK' : 'CONECTANDO...'}
          </strong>
        </div>
        <VscDebugDisconnect color="#ccc" size={30} />
      </InfoCard>

      <InfoCard color="#1CC88A">
        <div>
          <span>Pulseiras Ativas</span>
          <strong>{pacientsCount}</strong>
        </div>
        <MdAccountCircle size={30} />
      </InfoCard>

      <InfoCard color="#36B9CC">
        <div>
          <span>Alertas nas últimas 24hrs</span>
          <strong>{alertsCount}</strong>
        </div>
        <MdWarning size={30} />
      </InfoCard>

      <InfoCard color="#F6C23E">
        <div>
          <span>Mensagens não-lidas</span>
          <strong>{messagesCount}</strong>
        </div>
        <MdMessage size={30} />
      </InfoCard>
    </Container>
  );
};

export default InfoCards;
