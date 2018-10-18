import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testAction, removeTestAction } from '../../../background/actions/testActions';
import style from './app.css';

const App = (props) => {
  const { text } = props;

  const handleTrigger = () => {
    props.testAction();
  };

  const handleRemove = () => {
    props.removeTestAction();
  };

  return (
    <div className={style.wrapper}>
      <p>{text}</p>
      {!text
        ? <button type="button" onClick={handleTrigger}>Trigger Test</button>
       : <button type="button" onClick={handleRemove}>Remove Test</button>
      }
    </div>
  );
};

App.propTypes = {
  testAction: PropTypes.func.isRequired,
  removeTestAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { test } = state;
  return {
    text: test.text,
  };
};

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction()),
  removeTestAction: () => dispatch(removeTestAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
