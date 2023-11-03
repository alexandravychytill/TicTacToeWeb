import React , { useState , useEffect} from 'react'
import { HomeProps } from './Home.interface';
import { Button } from '../components/Button/Button';
import "./Home.css"
import { Header } from '../components/Header/Header';

export function Home({}: HomeProps) {
    const [isMobile, setIsMobile] = useState(false);

    const handleWindowResize = () => {
        const resolution = window.innerWidth;
        const mobile = resolution <= 480;

        setIsMobile(mobile);
      };
    
      useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    
    return (
      <div data-testid="homeView">
        {isMobile ? null : <Header />}
        <div className="buttonContainer" data-testid="homeView">
          <Button titleButton="start" link="/Game" testID="startButton" />
        </div>
      </div>
    );
  };