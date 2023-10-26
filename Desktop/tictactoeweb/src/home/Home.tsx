import React from 'react'
import { HomeProps } from './Home.interface';
import { Button } from '../components/Button/Button';
import "./Home.css"

export function Home({}: HomeProps) {
    return (
      <div className="homeContainer" data-testid="homeView">
        <Button titleButton="start" link={'/Game'} testID="startButton" />
      </div>
    );
  };