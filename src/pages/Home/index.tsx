import { ArrowSquareUpRight, GithubLogo, HouseLine, Users } from 'phosphor-react'
import { Cards, Input, Profile } from './styles';

import Avatar from '../../assets/avatar.png';
import { Card } from '../../components/Header/Card';


export function Home() {
  return (
    <>
    <Profile>
      <img src={Avatar} />
      <div className="profile-content">
        <div className="profile-content-header">
          <h1>Cameron Williamson</h1>
          <a href="#">github <ArrowSquareUpRight size={18} weight="bold" /> </a>
        </div>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          <ul className="info">
            <li><GithubLogo size={18} weight="bold" className="profile-info-label"/> cameronwll</li>
            <li><HouseLine size={18} weight="bold" className="profile-info-label"/> Rocketseat</li>
            <li><Users size={18} weight="bold" className="profile-info-label"/> 32 seguidores</li>
          </ul>
      </div>
    </Profile>

    <Input>
      <div className="input-header">
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <input type="text" name="search" placeholder="Buscar conteúdo"/>    
    </Input>

    <Cards>
      <Card />
      <Card />
      <Card />
      <Card />
    </Cards>

    </>
  )
}