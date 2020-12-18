import React from 'react';

import useApiInterface from 'hooks/useApiInterface';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import SidebarMenu from '../../components/SidebarMenu';
import { Container, Content, RightContainer } from './styles';
// import InfoCards from '../../components/InfoCards';
import UsersTable from '../../components/UsersTable';

const UsersList: React.FC = () => {
  const { pacientsInfo } = useApiInterface();
  const history = useHistory();

  return (
    <Container>
      <SidebarMenu />
      <RightContainer>
        <TopBar />
        <Content>
          <div className="page-title">
            <IoMdArrowRoundBack size={22} onClick={history.goBack} />
            <h2>Listagem de Pacientes</h2>
          </div>
          {/* <InfoCards
            connectionStatus={connectionStatus}
            pacientsCount={pacientsInfo.length}
            messagesCount={messages.length}
            alertsCount={alerts.length}
          /> */}
          <UsersTable pacients={pacientsInfo} />
        </Content>
      </RightContainer>
    </Container>
  );
};

export default UsersList;
