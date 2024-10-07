import React from 'react'

import { FaPython as Python, FaJava as Java, FaJsSquare as JS, FaHtml5 as HTML, FaReact, FaSass as Sass, FaNodeJs, FaRaspberryPi, FaPhp } from 'react-icons/fa'
import { FaGitSquare as Git, FaMicrosoft as Windows, FaLinux as Linux, FaCss3Alt as CSS} from 'react-icons/fa'
import { GoTerminal as Bash } from 'react-icons/go';
import { 
  SiRedux as Redux, 
  SiGraphql as GraphQL, 
  SiTypescript as TypeScript, 
  SiMysql as MySQL, 
  SiMongodb as Mongodb, 
  SiTwilio as Twilio, 
  SiPostgresql as PostgresQL, 
  SiJest as Jest, 
  SiPostman as Postman, 
  SiTensorflow,
  SiJunit5,
  SiCplusplusbuilder,
  SiCsharp
} from 'react-icons/si';


// import { Cpp, Unity, Csharp } from '../../assets/icons/index'
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { SoftwareBadge } from './SoftwareBadge';


const BadgeBlock : React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div css={{
      maxWidth: 1000,
      fontSize: 35,
      color: 'white',
      margin: '10px auto 0px',
      display: 'flex',
      flexWrap: 'wrap',
    }}>{children}</div>
  )
}

const Title : React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div css={{
      fontSize: 40,
      margin: '0px 30px 10px',
      textAlign: 'center',
      textTransform: 'lowercase',
      color: 'white',
      letterSpacing: 3
    }}>{children}</div>
  )
}

export const Skills : React.FC = () => {

  return (
    <div id='skills' css={{
      minHeight: '100vh',
      padding: '75px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Title>Expert</Title>
      <BadgeBlock>
        <SoftwareBadge label='TypeScript' Icon={TypeScript}/> 
        <SoftwareBadge label='React' Icon={FaReact}/> 
        <SoftwareBadge label='Redux' Icon={Redux}/> 
        <SoftwareBadge label='Javascript' Icon={JS}/> 
        <SoftwareBadge label='Jest' Icon={Jest}/> 
      </BadgeBlock>
      <BadgeBlock>
        <SoftwareBadge label='HTML' Icon={HTML}/> 
        <SoftwareBadge label='CSS' Icon={CSS}/> 
        <SoftwareBadge label='Node.js' Icon={FaNodeJs}/> 
        <SoftwareBadge label='Python' Icon={Python}/> 
      </BadgeBlock>

      
      <Title>Proficient</Title>
      <BadgeBlock>
        <SoftwareBadge label='Java' Icon={Java}/> 
        <SoftwareBadge label='JUnit' Icon={SiJunit5}/> 
        <SoftwareBadge label='C#' Icon={SiCsharp}/> 
        <SoftwareBadge label='C++' Icon={SiCplusplusbuilder}/>
        <SoftwareBadge label='Raspberry Pi' Icon={FaRaspberryPi}/>   
      </BadgeBlock>
      <BadgeBlock>
        <SoftwareBadge label='SQL' Icon={AiOutlineConsoleSql}/> 
        <SoftwareBadge label='MongoDB' Icon={Mongodb}/> 
        <SoftwareBadge label='GraphQL' Icon={GraphQL}/>
        <SoftwareBadge label='Twilio' Icon={Twilio}/>
        <SoftwareBadge label='Tensorflow' Icon={SiTensorflow}/> 
      </BadgeBlock>
    </div>
  )
};