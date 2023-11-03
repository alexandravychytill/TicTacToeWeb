import React  from 'react';
import {useRef} from 'react';
import { PlayerIndicatorProps } from './PlayerIndicator.interface';
import { IoEllipseOutline, IoCloseOutline } from "react-icons/io5";
import './PlayerIndicator.css'; 

export const PlayerIndicator = ({ systemImageName }: PlayerIndicatorProps) => {
    return (
        <div className="container">
          {systemImageName === 'ellipse' ? (
            <IoEllipseOutline className='icon' size={60}/>
          ) : systemImageName === 'close' ? (
            <IoCloseOutline  className="icon" size={60}/>
          ) : null}
        </div>
      );
};