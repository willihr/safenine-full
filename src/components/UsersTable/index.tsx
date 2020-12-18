import { PacientInfo } from 'dto/ServerResponseDTO';
import React, { MouseEvent, useCallback } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, Table } from './styles';

interface UsersTableProps {
  pacients: PacientInfo[];
}

const UsersTable: React.FC<UsersTableProps> = ({
  pacients,
}: UsersTableProps) => {
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
      <h3>Pulseiras</h3>

      <div>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th style={{ width: '17%' }}>Batimentos Cardíacos</th>
              <th style={{ width: '17%' }}>Pressão Arterial</th>
              <th style={{ width: '17%' }}>Temperatura Corporal</th>
              <th style={{ width: '3%', textAlign: 'center' }}> </th>
            </tr>
          </thead>

          <tbody>
            {pacients.map(user => (
              <tr key={user.id} onClick={e => handleUserClick(e, user.id)}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{`${user.sensor1} BPM`}</td>
                <td>{`${user.sensor2} mmHg`}</td>
                <td>{`${user.sensor3}º`}</td>
                <td style={{ textAlign: 'center' }}>
                  <MdArrowForward color="green" size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default UsersTable;
