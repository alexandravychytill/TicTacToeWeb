import React ,{ useEffect , useState} from 'react';
import './Alert.css'; 
import { AlertProps } from './Alert.interface';
import { Button } from '../Button/Button';

export const Alert:React.FC<AlertProps> = ({ message , onClose }) => {
    const [visible, setVisible] = useState(true);
  
    return visible ? (
      <div className='alertScreen'>
        <div className={`custom-alert`}>
            {message}
            <br/>
                <Button titleButton="close" link="/Home" testID="alertButton" />
        </div>
      </div>  
    ) : null;
  };
  