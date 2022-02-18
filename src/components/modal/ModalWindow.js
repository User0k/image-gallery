import { useState } from 'react';
import StyledModalWindow from './StyledModalWindow';
import SmallModalImg from './SmallModalImg';
import LargeModalImg from './LargeModalImg';

function ModalWindow ({ description, url }) {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <StyledModalWindow>
      {
        !enlarge ?
        <SmallModalImg
          onClick={() => setEnlarge(true)}
          src={url.regular}
          alt={description}
        /> :
        <LargeModalImg
          onClick={() => setEnlarge(false)}
          src={url.regular}
          alt={description}
        />
      }
    </StyledModalWindow>
  )
}

export default ModalWindow;
