import React from 'react';

import useApiInterface from 'hooks/useApiInterface';
import InfoCards from 'components/InfoCards';
import AlertsList from 'components/AlertsList';
import TopBar from '../../components/TopBar';
import SidebarMenu from '../../components/SidebarMenu';
import { Container, Content, RightContainer } from './styles';

const Dashboard: React.FC = () => {
  const {
    connectionStatus,
    pacientsInfo,
    alerts,
    messages,
  } = useApiInterface();

  return (
    <Container>
      <SidebarMenu />
      <RightContainer>
        <TopBar />
        <Content>
          <h2>Painel de Controle</h2>
          <InfoCards
            connectionStatus={connectionStatus}
            pacientsCount={pacientsInfo.length}
            messagesCount={messages.length}
            alertsCount={alerts.length}
          />
          <AlertsList alerts={alerts} />
        </Content>
      </RightContainer>
    </Container>
  );
};

export default Dashboard;
