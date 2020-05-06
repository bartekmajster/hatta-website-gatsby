import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik } from 'formik';
import PageInfo from '../components/PageInfo/PageInfo';
import Button from '../components/Button/Button';
import SEO from '../components/Seo/seo';

const StyledInput = styled.input`
  display: block;
  border: 2px solid black;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  outline: black;
  height: ${({ as }) => (as ? '200px' : 'auto')};
  width: ${({ as }) => (as ? '500px' : '300px')};
  margin-bottom: ${({ as }) => as && '40px'};
  padding: 5px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  font-family: Montserrat, sans-serif;
`;

const pageData = {
  title: 'concat',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real.',
};

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post('http://link-to-cloud-function/', values)
          .then(res => {
            setSubmitting(false);
          })
          .catch(err => {
            setSubmitting(false);
          });
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
          <StyledInput
            id="email"
            type="e-mail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledInput
            id="message"
            type="text"
            name="message"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <Button disabled={isSubmitting}>send message</Button>
        </form>
      )}
    </Formik>
  </>
);

export default ContactPage;
