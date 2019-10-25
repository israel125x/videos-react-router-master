import React from 'react';
import './generic-page.css';
import HomeLayout from './home-layout';
import Categories from './../../categories/components/categories';
import Related from '../components/related';//'./components/related';
import ModalContainer from '../widgets/components/modal';//'../widgets/containers/modal';
import Modal from '.modal';
import HandleError from './../error/containers/handle-error';
import VideoPlayer from './../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from './../actions/index';
import { bindActionCreators } from 'redux';

const Home = () => (
  <div className="Page">
    <h1>Bienvenido a Platzi Video</h1>
    <p>Platzi Video es una plataforma creada en los cursos de <a href="https://platzi.com/react">React</a>, <a href="https://platzi.com/redux">Redux</a> y <a href="https://platzi.com/router">React Router</a></p>
    <p>Puedes encontrar su versión móvil en el curso de <a href="https://platzi.com/native">React Native</a></p>
  </div>
)

export default Home
