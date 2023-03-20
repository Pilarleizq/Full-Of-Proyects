import Profile from './Profile';
import cover from '../../images/preview.jpg';
import Card from './Card';

const Preview = ({ data }) => {
  return (
    <section className="preview">
      <Profile
        defaultAvatar={cover}
        avatar={data.image}
        className={'preview-image'}
      />
      <Card data={data}></Card>
    </section>
  );
};

export default Preview;
