import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useEffect, useState } from 'react';
import dataApi from '../service/api';
import ls from '../service/localStorage';
import GetAvatar from './GetAvatar';
import Profile from './Profile';

function App() {
  const [message, setMessage] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [image, setImage] = useState('');

  const [data, setData] = useState({
    name: ls.get('dataLS', {}).name || '',
    slogan: ls.get('dataLS', {}).slogan || '',
    technologies: ls.get('dataLS', {}).technologies || '',
    repo: ls.get('dataLS', {}).repo || '',
    demo: ls.get('dataLS', {}).demo || '',
    desc: ls.get('dataLS', {}).desc || '',
    autor: ls.get('dataLS', {}).autor || '',
    job: ls.get('dataLS', {}).job || '',
    image: ls.get('dataLS', {}).image || '',
    photo: ls.get('dataLS', {}).photo || '',
  });

  const [infoURL, setinfoURL] = useState('');

  const [isCreatedCard, setIsCreatedCard] = useState(false);

  const [isCompletedForm, setCompletedForm] = useState(false);

  // expresion regular dayana /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/

  useEffect(() => {
    ls.set('dataLS', data);
  }, [data]);

  const updateImages = (avatar) => {
    setData({ ...data, image: avatar });
  };
  const updatePhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  const pattern = new RegExp('^https?://[w-]+(.[w-]+)+[/#?]?.*$');

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === 'repo' || inputName === 'demo') {
      if (pattern.test(inputValue)) {
        setData({ ...data, [inputName]: inputValue });
      } else {
        setMessage('Introduce un URL válida');
      }
    } else {
      setData({ ...data, [inputName]: inputValue });
    }
  };
  /*    if (inputName === 'name') {
      setData({ ...data, name: inputValue });
    } else if (inputName === 'slogan') {
      setData({ ...data, slogan: inputValue });
    } else if (inputName === 'technologies') {
      setData({ ...data, technologies: inputValue });
    } else if (inputName === 'repo') {
      if (pattern.test(inputValue)) {
        setData({ ...data, repo: inputValue });
      } else {
        setMessage('Introduce un URL válida');
      }
    } else if (inputName === 'demo') {
      setData({ ...data, demo: inputValue });
    } else if (inputName === 'desc') {
      setData({ ...data, desc: inputValue });
    } else if (inputName === 'autor') {
      setData({ ...data, autor: inputValue });
    } else if (inputName === 'job') {
      setData({ ...data, job: inputValue });
    } */
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((info) => {
      console.log(info);
      if (info.success) {
        setCompletedForm(true);
        setIsCreatedCard(true);
        setinfoURL(info.cardURL);
      } else {
        setIsCreatedCard(true);
        setCompletedForm(false);
      }
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
        <a href="https://www.adalab.es" target="blank">
          <img src={logo} alt="" className="logo" />
        </a>
      </header>
      <main className="main">
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
        <section className="form">
          <h2 className="title">Información</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="project">
              <legend className="ask-info">
                <p className="subtitle">Cuéntanos sobre el proyecto</p>
                <hr className="line" />
              </legend>
             
              <label className="label-form"> Nombre del proyecto:
              <input
                className="input"
                type="text"
                placeholder="Nombre del proyecto"
                name="name"
                id="name"
                minLength="2"
                required
                value={data.name}
                onInput={handleInput}
              />
              </label>
             
             <label className='label-form'>
              Slogan:
              <input
                className="input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                minLength="2"
                required
                value={data.slogan}
                onInput={handleInput}
              />
              </label>

              <label className='label-form' > Repo:
              <input
                className="input"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo (copia y pega la url directamente)"
                required
                value={data.repo}
                onInput={handleInput}
              />
              </label>

              <label className='label-form'>Demo:
              <input
                className="input"
                type="text"
                placeholder="Demo (copia y pega la url directamente)"
                name="demo"
                id="demo"
                required
                value={data.demo}
                onInput={handleInput}
              />
              </label>

              <label className='label-form'>Tecnologías:
              <input
                className="input"
                type="text"
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
                required
                value={data.technologies}
                onInput={handleInput}
              />
              </label>

              <label className='label-form'>Descripción:
              <textarea
                className="textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                required
                value={data.desc}
                onInput={handleInput}
                maxLength="500ch"
              ></textarea>
              </label>
              <small className="message">{message}</small>
            </fieldset>
            <fieldset className="autor">
              <legend className="ask-info">
                <p className="subtitle">Cuéntanos sobre la autora</p>
                <hr className="line" />
              </legend>
              <label className='label-form'> Nombre:
              <input
                className="input"
                type="text"
                placeholder="Nombre"
                name="autor"
                id="autor"
                required
                value={data.autor}
                onInput={handleInput}
              />
              </label>
              <label className="label-form">Trabajo:
              <input
                className="input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
                required
                value={data.job}
                onInput={handleInput}
              />
              </label>
            </fieldset>
            <section className="buttons-img">
              <GetAvatar
                className={'btn'}
                updateAvatar={updatePhoto}
                value={'Subir foto de autora'}
              />
              <GetAvatar
                className={'btn'}
                updateAvatar={updateImages}
                value={'Subir foto de proyecto'}
              />

              {/* <button className="btn"
                Subir foto de proyecto
              </button>
              <button className="btn">
                Subir foto de autora
              </button> */}
            </section>
            <section className="buttons-img">
              <button className="btn-large" onClick={handleClickCreateCard}>
                CREAR TARJETA
              </button>
            </section>
            <section className={`card ${isCreatedCard ? '' : 'hidden'}`}>
              <span className="create">
                {isCompletedForm
                  ? 'La tarjeta ha sido creada:'
                  : 'Faltan campos por rellenar'}
              </span>
              <a href={infoURL} className="url" target="blank" rel="noreferrer">
                {infoURL}
              </a>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
