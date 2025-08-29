import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <div className={'flex gap-4 h-screen items-center'}>
        <div
          className={'flex px-2 border-r border-tertiary flex-1 justify-center'}
        >
          <a>📧 mshimdev@gmail.com</a>
        </div>

        <div
          className={
            'flex px-2 gap-4 border-r border-tertiary flex-1 justify-center hover:text-lg hover:text-quaternary-hover transition-colors-smooth'
          }
        >
          <a
            className={''}
            href={'https://github.com/Earlssu'}
            target={'_blank'}
          >
            Github
          </a>
        </div>

        <div
          className={
            'flex px-2 gap-4 flex-1 justify-center hover:text-lg hover:text-quaternary-hover transition-colors-smooth'
          }
        >
          <a
            className={''}
            href={'https://code-in-law.tistory.com/'}
            target={'_blank'}
          >
            Blog
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
