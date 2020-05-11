import {FC} from 'react';
import {SNSLinkInfo} from '../lib/member-fetch';

type Style = {text: string; backColor: string; color: string};

const styles: Record<SNSLinkInfo['type'], Style> = {
  twitter: {
    text: 'Twitter',
    backColor: '#25a0f2',
    color: 'white',
  },
  github: {
    text: 'GitHub',
    backColor: 'black',
    color: 'white',
  },
};

export const SNSLink: FC<SNSLinkInfo> = ({type, url}) => {
  const {text, backColor, color} = styles[type];
  return (
    <>
      <div>
        <a href={url}>{text}</a>
      </div>
      <style jsx>{`
        div {
          background-color: ${backColor};
          margin: 0 0.4em 0 0;
          padding: 0.2em;
          border-radius: 10%;
        }
        a {
          color: ${color};
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
