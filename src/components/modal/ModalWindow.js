import { useState } from 'react';
import StyledModalWindow from './StyledModalWindow';
import SmallModalImg from './SmallModalImg';
import LargeModalImg from './LargeModalImg';
import DownloadButton from '../buttons/DownloadButton';

function ModalWindow ({ image, close }) {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <StyledModalWindow>
      <DownloadButton url={image.urls} id={image.id}/>
      {
        !enlarge ?
        <SmallModalImg
          onClick={() => setEnlarge(true)}
          src={image.urls.regular}
          alt={image.description}
        /> :
        <LargeModalImg
          onClick={() => setEnlarge(false)}
          src={image.urls.regular}
          alt={image.urls.description}
        />
      }
    </StyledModalWindow>
  )
}

export default ModalWindow;
