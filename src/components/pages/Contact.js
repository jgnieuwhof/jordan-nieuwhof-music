import React from 'react';
import styled from '@emotion/styled';
import { Form } from 'react-formio';
import { differenceInMinutes } from 'date-fns';

import desert from 'img/desert.jpg';
import Page from './Page';
import { Div } from 'components/uikit';
import { Mobile } from 'components/uikit/Responsive';
import { useLocalStorage } from 'components/hooks';

const FormContainer = styled(Div)`
  .formio-form {
    .alert,
    .formio-errors {
      display: none;
    }

    .form-group:not(.formio-component-submit) {
      display: ${x => (x.isMobile ? 'block' : 'grid')};
      grid-template-columns: 20% 80%;
      margin-bottom: ${x => x.theme.space[3]}px;

      label {
        display: ${x => (x.isMobile ? 'block' : 'auto')};
        text-align: left;
      }

      input,
      textarea {
        font-size: 16px;
        border-radius: 4px;
        border: none;
        resize: none;
        width: 100%;
        margin-top: ${x => (x.isMobile ? 8 : 0)}px;
        &:not(.is-valid) {
          padding: 10px;
        }
        &.is-invalid {
          padding: 9px;
          border: 1px solid red;
        }
      }
    }

    button[type='submit'] {
      background-color: ${x => x.theme.colors.dark};
      color: ${x => x.theme.colors.light};
      font-weight: bold;
      padding: 8px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: ${x => x.theme.fontSize[2]};
    }
  }
`;

const Contact = () => {
  const [lastSubmittedDate, setLastSubmittedDate] = useLocalStorage(
    'lastSubmittedDate',
    null,
    x => +x
  );

  const hasSubmitted =
    lastSubmittedDate &&
    differenceInMinutes(new Date(), new Date(lastSubmittedDate)) < 5;

  const emailLink = (
    <a href="mailto:jnieuwhofmusic@gmail.com">jnieuwhofmusic@gmail.com</a>
  );

  return (
    <Page background={desert} header="Contact" maxWidth={650}>
      {!hasSubmitted && (
        <Div>
          Feel free to send an email to {emailLink}, or fill out the form below.
        </Div>
      )}
      <Mobile>
        {isMobile => (
          <FormContainer pt={4} {...{ isMobile }}>
            {hasSubmitted ? (
              <Div>
                <p>
                  Thank you for your message! I'll get back to you as soon as
                  possible.
                </p>
                <p>
                  If you need to send another message come back in a few
                  minutes, or email {emailLink}.
                </p>
              </Div>
            ) : (
              <Form
                src="https://mvnlshtnphngfrw.form.io/contact-us"
                onSubmitDone={({ saved }) => {
                  if (saved) {
                    setLastSubmittedDate(new Date().getTime());
                  }
                }}
              />
            )}
          </FormContainer>
        )}
      </Mobile>
    </Page>
  );
};

export default Contact;
