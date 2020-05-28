import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import { Dropdown } from 'react-bootstrap';

import { LanguageSelect } from '../index';
import { i18n, PageLink } from '../../libs';

import styles from './Header.module.scss';

const PAGE_LIST: PageLink[] = [
  new PageLink('homepage', '/'),
  new PageLink('about', '/about'),
  new PageLink('contribute', '/contribute'),
  new PageLink('mapping-party', '/mapping-party'),
  new PageLink('contact', '/contact')
];

interface Props {
  lang;
}
interface State {
  changeLanguage;
  displayMenu;
  selectedLanguage;
}

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      changeLanguage: undefined,
      displayMenu: false,
      selectedLanguage: 'fr'
    };
  }

  componentDidMount() {
    const selectedLanguage = localStorage.getItem('lang');

    this.setState({
      changeLanguage: lang => {
        localStorage.setItem('lang', lang);
        window.location.reload();
      },
      selectedLanguage: selectedLanguage ? selectedLanguage : 'fr'
    });
  }

  render() {
    if (!this.state.changeLanguage) {
      return <div>loading...</div>;
    }

    return (
      <>
        <Head>
          <title>MoDos</title>
          <link rel='icon' href='/favicon.ico' />

          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          ></link>
        </Head>

        <header className={styles.navbar}>
          <div className={styles.navMenuIcon}>
            <button
              onClick={() =>
                this.setState({ displayMenu: !this.state.displayMenu })
              }
            >
              <i className='material-icons md-36'>menu</i>
            </button>
          </div>

          <div className={styles.logo}>
            <svg width='163' height='150' viewBox='0 0 163 150' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M131.8 48.7106H97.3223V97.0468H131.8V48.7106Z' fill='#826DAF'/>
              <path d='M0 123.399H7.39874V127.085C9.10614 124.896 11.3485 122.911 15.0934 122.911C18.5082 122.911 21.0807 124.42 22.4466 127.04C24.7346 124.374 27.4664 122.911 31.0178 122.911C36.527 122.911 39.8394 126.212 39.8394 132.474V149.421H32.4406V134.901C32.4406 131.407 30.8812 129.615 28.1038 129.615C25.3265 129.615 23.6191 131.407 23.6191 134.901V149.421H16.2203V134.901C16.2203 131.407 14.6609 129.615 11.8835 129.615C9.10614 129.615 7.39874 131.407 7.39874 134.901V149.421H0V123.399Z' fill='#192144'/>
              <path d='M45.0068 136.455C45.0068 128.98 51.051 122.911 59.1783 122.911C67.26 122.911 73.2587 128.878 73.2587 136.455C73.2587 143.931 67.2144 150 59.0872 150C51.0055 150 45.0068 144.022 45.0068 136.455ZM65.9624 136.455C65.9624 132.621 63.185 129.275 59.0986 129.275C54.8642 129.275 52.3259 132.53 52.3259 136.455C52.3259 140.29 55.1033 143.636 59.1897 143.636C63.424 143.636 65.9624 140.38 65.9624 136.455Z' fill='#192144'/>
              <path d='M77.459 136.353C77.459 127.664 83.1617 122.911 89.3425 122.911C93.2923 122.911 95.7282 124.703 97.4811 126.79V113.972H104.88V149.41H97.4811V145.667C95.6827 148.094 93.1898 149.887 89.3425 149.887C83.2528 149.898 77.459 145.145 77.459 136.353ZM97.5722 136.353C97.5722 132.031 94.6924 129.173 91.2434 129.173C87.7831 129.173 84.8577 131.986 84.8577 136.455C84.8577 140.777 87.7831 143.636 91.2434 143.636C94.7037 143.636 97.5722 140.777 97.5722 136.353Z' fill='#192144'/>
              <path d='M110.241 136.455C110.241 128.98 116.285 122.911 124.413 122.911C132.494 122.911 138.493 128.878 138.493 136.455C138.493 143.931 132.449 150 124.322 150C116.229 150 110.241 144.022 110.241 136.455ZM131.185 136.455C131.185 132.621 128.408 129.275 124.322 129.275C120.087 129.275 117.549 132.53 117.549 136.455C117.549 140.29 120.326 143.636 124.413 143.636C128.647 143.636 131.185 140.38 131.185 136.455Z' fill='#192144'/>
              <path d='M141.806 145.973L144.97 141.118C147.793 143.16 150.764 144.226 153.2 144.226C155.34 144.226 156.319 143.455 156.319 142.184C156.319 140.585 153.792 140.051 150.912 139.178C147.258 138.112 143.115 136.41 143.115 131.26C143.115 125.974 147.406 123.013 152.665 123.013C155.977 123.013 159.585 124.125 162.408 126.019L159.585 131.112C157.002 129.604 154.418 128.685 152.517 128.685C150.718 128.685 149.785 129.456 149.785 130.579C149.785 132.031 152.266 132.712 155.089 133.688C158.743 134.901 162.977 136.648 162.977 141.503C162.977 147.277 158.641 149.898 152.995 149.898C149.352 149.898 145.266 148.684 141.806 145.973Z' fill='#192144'/>
              <path d='M117.549 66.77H48.9111V0L117.549 35.1887V66.77Z' fill='#192144'/>
              <path d='M89.1148 74.3704H48.9111V80.7003H89.1148V74.3704Z' fill='#FDC300'/>
              <path d='M89.1148 85.1357H48.9111V91.4656H89.1148V85.1357Z' fill='#FDC300'/>
              <path d='M49.1618 94.0974C48.5016 94.0974 47.8755 93.8025 47.4658 93.3034C45.3031 90.7056 26.3281 67.5641 26.3281 55.7551C26.3281 43.2088 36.5725 32.9993 49.1618 32.9993C61.751 32.9993 71.9955 43.2088 71.9955 55.7551C71.9955 67.5641 53.0205 90.7056 50.8578 93.3034C50.448 93.8025 49.822 94.0974 49.1618 94.0974Z' fill='#DE3E4F'/>
              <path d='M49.162 35.1887C60.5561 35.1887 69.7874 44.3886 69.7874 55.7438C69.7874 67.099 49.162 91.8854 49.162 91.8854C49.162 91.8854 28.5366 67.099 28.5366 55.7438C28.5366 44.3999 37.7793 35.1887 49.162 35.1887ZM49.162 30.7873C35.3548 30.7873 24.1201 41.9837 24.1201 55.7438C24.1201 68.0632 42.1503 90.3539 45.7586 94.6986C46.6009 95.7082 47.8416 96.2868 49.162 96.2868C50.4824 96.2868 51.7231 95.7082 52.5654 94.6986C56.1851 90.3539 74.2153 68.0632 74.2153 55.7438C74.2153 41.9837 62.9806 30.7873 49.162 30.7873Z' fill='white'/>
              <path d='M49.1617 64.0588C54.0463 64.0588 58.0061 60.1126 58.0061 55.2446C58.0061 50.3767 54.0463 46.4305 49.1617 46.4305C44.2771 46.4305 40.3174 50.3767 40.3174 55.2446C40.3174 60.1126 44.2771 64.0588 49.1617 64.0588Z' fill='white'/>
            </svg>
          </div>

          <LanguageSelect
            className={styles.language}
            selectedLanguage={this.state.selectedLanguage}
            onLanguageChange={language => this.state.changeLanguage(language)}
          ></LanguageSelect>

          <div
            className={`
            ${styles.menu} 
            ${this.state.displayMenu ? '' : 'hidden'}`}
          >
            <button
              onClick={() =>
                this.setState({
                  displayMenu: !this.state.displayMenu
                })
              }
            >
              <i className='material-icons md-36'>close</i>
            </button>

            {PAGE_LIST.map(page =>
              <Link href={page.link} key={page.name}>
                <a
                  onClick={() =>
                    this.setState({
                      displayMenu: !this.state.displayMenu
                    })
                  }
                >
                  {i18n('header', page.name, this.props.lang)}
                </a>
              </Link>)}
          </div>
        </header>
      </>
    );
  }
}

export { Header };
