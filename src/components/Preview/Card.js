import user from '../../images/user.jpeg';
import Profile from './Profile';

const Card = ({ data }) => {
  return (
    <section className="autor">
      <section className="info-project">
        <p className="subtitle">Personal Project Card</p>
        <hr className="line" />

        <h2 className="title">{data.name || 'Elegant Workspace'}</h2>
        <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
        <p className="desc">
          {data.desc ||
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Libero, delectus? Voluptates at hic aliquam porro ad suscipit
      harum laboriosam saepe earum doloribus aperiam, ullam culpa
      accusantium placeat odit corrupti ipsum!`}
        </p>
        <section className="technologies">
          <p className="text">{data.technologies || 'React JS, MongoDB'}</p>
        </section>
      </section>

      <section className="info-autor">
        <Profile
          defaultAvatar={user}
          avatar={data.photo}
          className={'autor-image'}
        />
        <p className="job">{data.job || 'Full Stack Developer'}</p>
        <p className="name">{data.autor || 'Emmelie Björklund'}</p>
      </section>
    </section>
  );
};

export default Card;
