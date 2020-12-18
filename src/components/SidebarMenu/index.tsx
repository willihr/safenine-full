import React from 'react';
import { MdWbCloudy } from 'react-icons/md';
import { IoIosListBox, IoIosSpeedometer } from 'react-icons/io';
import { BsPersonBoundingBox } from 'react-icons/bs';

// import logo from '../../assets';
import { Container, PageLink, Title } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <div>
        <Title to="/">
          <MdWbCloudy size={30} />
          <h2>SafeNine</h2>
        </Title>
      </div>
      <div>
        <PageLink to="/">
          <IoIosSpeedometer size={16} />
          <span>Painel de Controle</span>
        </PageLink>
      </div>
      <div>
        <span>Pacientes</span>
        <PageLink to="/users">
          <IoIosListBox size={16} />
          <span>Listar Pacientes</span>
        </PageLink>
      </div>
      <div>
        <span>Pulseira Simulada</span>
        <PageLink to="/pulseira.html" target="_blank">
          <BsPersonBoundingBox size={16} />
          <span>Abrir Pulseira</span>
        </PageLink>
      </div>
    </Container>
  );
};

export default TopBar;
