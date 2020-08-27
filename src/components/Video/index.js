import React from "react";
import { connect } from "react-redux";

// import { Container } from './styles';

const Video = ({ activeModule, activeLesson }) => (
  <div>
    <strong>Módulo {activeModule.title} </strong>
    <span>Aula {activeLesson.title}</span>
  </div>
);

const mapStateToProps = (state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
});

export default connect(mapStateToProps)(Video);
