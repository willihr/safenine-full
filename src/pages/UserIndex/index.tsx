import React, { useEffect, useState } from 'react';

import useApiInterface from 'hooks/useApiInterface';
// import InfoCards from 'components/InfoCards';
import TopBar from 'components/TopBar';
import SidebarMenu from 'components/SidebarMenu';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { PacientInfo } from 'dto/ServerResponseDTO';
import { IoMdArrowRoundBack } from 'react-icons/io';
import UserGraphs from 'components/UserGraphs';
import { Container, Content, RightContainer } from './styles';

interface UserIndexParams {
  id: string;
}

const UserIndex: React.FC = () => {
  const { measures, pacientsInfo } = useApiInterface();
  const [pacient, setPacient] = useState<PacientInfo | undefined>(undefined);
  const { params } = useRouteMatch<UserIndexParams>();
  const history = useHistory();

  useEffect(() => {
    const pacientFound = pacientsInfo.find(
      item => item.id === parseInt(params.id, 10),
    );
    setPacient(pacientFound);
  }, [pacientsInfo, params]);

  return (
    <Container>
      <SidebarMenu />
      <RightContainer>
        <TopBar />
        <Content>
          <div>
            <IoMdArrowRoundBack size={22} onClick={history.goBack} />
            {(pacient && <h2>{`Paciente: ${pacient.name}`}</h2>) || (
              <h2>Paciente não encontrado no banco de dados</h2>
            )}
          </div>
          {/* <InfoCards
            connectionStatus={connectionStatus}
            pacientsCount={pacientsInfo.length}
            messagesCount={messages.length}
            alertsCount={alerts.length}
          /> */}
          <UserGraphs measures={measures} pacientId={parseInt(params.id, 10)} />
        </Content>
      </RightContainer>
    </Container>
  );
};

export default UserIndex;
