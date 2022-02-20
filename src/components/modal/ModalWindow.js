import { useState, forwardRef } from 'react';
import StyledModalWindow from './StyledModalWindow';
import SmallModalImg from './SmallModalImg';
import LargeModalImg from './LargeModalImg';
import DownloadButton from '../buttons/DownloadButton';
import PublishedOn from './PublishedOn';

const ModalWindow = forwardRef(({ image, close }, ref) => {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <StyledModalWindow ref={ref}>
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
      <PublishedOn parsedDate={image.created_at}/>
    </StyledModalWindow>
  )
})

export default ModalWindow;
