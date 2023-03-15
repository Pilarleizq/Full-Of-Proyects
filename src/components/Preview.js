import Profile from './Profile';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

const Preview = ({data}) => {

return (

<section className="preview">
{/* <img className="image" src={cover} alt="" /> */}
<Profile defaultAvatar={cover} avatar={data.image} />

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
      <p className="text">
        {data.technologies || 'React JS, MongoDB'}
      </p>
    </section>
  </section>

  <section className="info-autor">
    {/* <img className="image" src={user} alt="" /> */}
    <Profile defaultAvatar={user} avatar={data.photo} />
    <p className="job">{data.job || 'Full Stack Developer'}</p>
    <p className="name">{data.autor || 'Emmelie Björklund'}</p>
  </section>
</section>
</section>

)};

export default Preview;