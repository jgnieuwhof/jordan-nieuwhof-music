import React from 'react';
import { Form } from 'react-formio';

import desert from 'img/desert.jpg';
import Page from './Page';
import { Div } from 'components/uikit';

const Contact = () => {
  return (
    <Page background={desert} header="Contact">
      <Div>
        Feel free to send an email to{' '}
        <a href="mailto:jnieuwhofmusic@gmail.com">jnieuwhofmusic@gmail.com</a>,
        or fill out the form below and I'll get back to you as soon as I can.
      </Div>
      <Div buffer>
        <Form src="https://mvnlshtnphngfrw.form.io/contact-us" />
      </Div>
    </Page>
  );
};

export default Contact;
