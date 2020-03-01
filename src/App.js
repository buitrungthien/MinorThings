import React from 'react';
import Header from './components/Header/Header.component';
import Input from './components/Input';
import { Field, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from './store';

let Form = props => (
  <form className='form-test'>
    <div className='form-group'>
      <Field name='thien' component={Input} size='big' disabled />
    </div>
    <div className='form-group'>
      <Field name='thien' component={Input} size='tiny' label='Name:' />
    </div>
    <div className='form-group'>
      <Field name='thien' component={Input} size='small' label='Class:' />
    </div>
    <div className='form-group'>
      <Field name='thien' component={Input} />
    </div>
    <div className='form-group'>
      <Field name='thien' component={Input} size='big' label='Age:' />
    </div>
  </form>
);

Form = reduxForm({ form: 'test-form' })(Form);

function App() {
  return (
    <Provider store={configureStore()}>
      <React.Fragment>
        <Header />
        <Form />
      </React.Fragment>
    </Provider>
  );
}

export default App;
