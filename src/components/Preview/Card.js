import user from '../../images/user.jpeg';
import Profile from './Profile';

const Card = ({ data }) => {
  return (
    <section className="card">
      <section className="project-info">
        <p className="project-subtitle">Personal Project Card</p>
        <hr className="card-line" />

        <h2 className="project-title">{data.name || 'Elegant Workspace'}</h2>
        <p className="project-slogan">{data.slogan || 'Diseños Exclusivos'}</p>
        <p className="project-desc">
          {data.desc ||
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Libero, delectus? Voluptates at hic aliquam porro ad suscipit
      harum laboriosam saepe earum doloribus aperiam, ullam culpa
      accusantium placeat odit corrupti ipsum!`}
        </p>
        <section className="tech-icons">
          <section className="project-technologies">
            <p className="text">{data.technologies || 'React JS, MongoDB'}</p>
          </section>
          <section>
            <a href={data.demo} target="blank">
              <i className="fa-solid fa-globe icons" title="Link a demo"></i>
            </a>
            <a href={data.repo} target="blank">
              <i
                className="fa-brands fa-github icons"
                title="Link a repositorio"
              ></i>
            </a>
          </section>
        </section>
      </section>

      <section className="autor-info">
        <Profile
          defaultAvatar={user}
          avatar={data.photo}
          className={'autor-image'}
        />
        <p className="autor-job">{data.job || 'Full Stack Developer'}</p>
        <p className="autor-name">{data.autor || 'Emmelie Björklund'}</p>
      </section>
    </section>
  );
};

export default Card;
