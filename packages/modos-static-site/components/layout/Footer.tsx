/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { useI18N } from '../../libs';

import styles from './Footer.module.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Footer = () => {
  const i18n = useI18N('footer');

  return (
    <footer id='contact' className={styles['main-footer']}>
      <Container fluid>
        <Row className={styles.contact}>
          <Col md={0} lg={1}></Col>
          <Col sm={12} lg={3} className={styles['contact-col']}>
            <h2>{i18n('contact')}</h2>
            <p>{i18n('moreinfo')}</p>
            <a href='https://people.hes-so.ch/fr/profile/olivier.ertz#contact'>
              <Button>{i18n('takecontact')}</Button>
            </a>
          </Col>
          <Col md={0} lg={1}></Col>
        </Row>
        <Row className={styles.universities}>
          <Col>
            <a href='https://hes-so.ch'>
              <img
                src={require('../../images/hes-logo.png')}
                alt='Logo HES-SO'
              />
            </a>
            <a href='https://heig-vd.ch'>
              <img
                src={require('../../images/heig-logo.png')}
                alt='Logo HEIG-VD'
              />
            </a>
            <a href='https://he-arc.ch'>
              <img
                src={require('../../images/hearc-logo.png')}
                alt='Logo HEARC'
              />
            </a>
            <a href='https://heia-fr.ch'>
              <img
                src={require('../../images/heia-logo.png')}
                alt='Logo HEIA-FR'
              />
            </a>
          </Col>
        </Row>
        <Row className={styles.copyright}>
          <Col>© 2020 MEI</Col>
          <Col>
            <a href='#'>
              <i className='material-icons md-36'>arrow_upward</i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
