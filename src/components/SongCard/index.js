import {AiOutlineDelete} from 'react-icons/ai'
import {
  SongCardListItem,
  LeftContainer,
  Thumb,
  NameGenreContainer,
  Name,
  Genre,
  RightContainer,
  Duration,
  DeleteBtn,
} from './styledComponent'

const SongCard = props => {
  const {trackDetails, onClickDelete} = props
  const {imageUrl, name, genre, duration, testid} = trackDetails
  const deleteTrack = () => {
    onClickDelete(testid)
  }
  return (
    <SongCardListItem>
      <LeftContainer>
        <Thumb src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </LeftContainer>
      <RightContainer>
        <Duration>{duration}</Duration>
        <DeleteBtn testid="delete" onClick={deleteTrack}>
          <AiOutlineDelete size={22} color="#ffffff" />
        </DeleteBtn>
      </RightContainer>
    </SongCardListItem>
  )
}
export default SongCard
