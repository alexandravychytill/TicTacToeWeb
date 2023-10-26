import React from 'react';
import { PlayerIndicatorProps } from './PlayerIndicator.interface';
import { IoEllipseOutline, IoCloseOutline } from "react-icons/io5";
import './PlayerIndicator.css'; 

export const PlayerIndicator = ({ systemImageName }: PlayerIndicatorProps) => {
    return (
        <div className="container">
          {systemImageName === 'ellipse' ? (
            <IoEllipseOutline size={120} className='icon' />
          ) : systemImageName === 'close' ? (
            <IoCloseOutline size={120} className="icon" />
          ) : null}
        </div>
      );
};