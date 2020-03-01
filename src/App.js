import React from 'react';
import Header from './components/Header/Header.component';
import Input from './components/Input';
import { Field, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from './store';

const required = value => value ? undefined : 'Required';

let Form = props => (
  <form className='form-test'>
    <div className='form-group'>
      <Field name='thien' component={Input} size='medium' label='Name:' validate={[required]} />
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
