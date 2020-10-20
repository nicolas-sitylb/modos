import React from 'react';
import { IObservation, OBSTACLES_TYPE } from '../../libs/modos-api';
import { Navbar } from 'react-bootstrap';

import styles from './map.module.scss';

interface IProps {
  id?: string;
  className?: string;
  observation: IObservation;
  onClickExit: (evt: any) => void;
}

export const ObservationInfoPanel = (props: IProps) => {
  const { id, description, image, owner } = props.observation;
  return (
    <div id={props.id} className={`${styles.observations} ${props.className}`}>
      <Navbar expand='lg'>
        <div className='mr-auto'></div>

        <div>
          <button
            onClick={evt => props.onClickExit(evt)}
            className={styles['navbar-btn']}>
            <i className='material-icons'>close</i>
          </button>
        </div>
      </Navbar>

      <div className={styles.infos}>
        <div className={styles['infos-details']}>
          <h3>Observation N°{id}</h3>
          <figure>
            <img src={image.basename} alt={image.basename} />
            <figcaption>{description.freeText}</figcaption>
          </figure>
        </div>

        <div className={styles['infos-owner']}>
          {owner ? `Publié par ${owner}` : 'Publicateur inconnu'}
        </div>

        <div className={styles['infos-category']}>
          <div>
            <div>{description.obstacle}</div>
            <div>
              {description.obstacle !== OBSTACLES_TYPE.UNLABELLED &&
                description.obstacle !== OBSTACLES_TYPE.NOPROBLEM && (
                  <img src={`/assets/${description.obstacle}-icon.png`} />
                )}
            </div>
          </div>
          <div>
            <div>Impact</div>
            <div>{description.impact}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
