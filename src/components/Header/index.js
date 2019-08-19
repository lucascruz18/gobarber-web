import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '../Notification';

import logo from '../../assets/logo_purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />

          <Profile>
            <div>
              <strong>Lucas Cruz</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Lucas Cruz"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
