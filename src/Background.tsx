import { HTMLAttributes } from 'react';
import Star from './assets/star.svg';
import './Background.css';

const starMap = [...Array(500).keys()].map(() => ({
  x: Math.floor(Math.random() * 100),
  y: Math.floor(Math.random() * 100),
  size: Math.floor(Math.random() * 5) + 5
}));

function Background({children, ...props}: HTMLAttributes<HTMLDivElement>) {

  return (
    <div id='background' {...props}>
      <div id='stars'>
      {starMap.map((star) => (
        <img src={Star} className='star' style={{
          height: star.size + 'px',
          width: star.size + 'px',
          top: star.y + '%',
          left: star.x + '%'
        }}/>
      ))}
      </div>
      {children}
    </div>
  )

}

export default Background;