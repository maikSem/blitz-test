import React from 'react';
import Image from '../Image/Image';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import NavigationMenu from "../Navigation/NavigationMenu";
import Text from "../Text/Text";
import ScrollDown from "../ScrollDown/ScrollDown";

const Main = (props) => {
  return (
    <main className='main'>
      <section className='top'>
      </section>
      <section className='main-nav'>
        <NavigationMenu addClassList='main-list' addClassItem='main-item' addClassLink='main-link'/>
      </section>
      <section className='about-me'>
        <Image alt='male 30 years old'/>
        <div className='description'>
          <Title styleClass='description-title' title='About me'/>
          <Text/>
        </div>
      </section>
      <ScrollDown text='keep scrolling, there is still more to come.'/>
    </main>
  )
};

export default Main;