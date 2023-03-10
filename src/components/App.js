import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useState } from 'react';
import dataApi from '../service/api';

function App() {
  const [message, setMessage] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [image, setImage] = useState('');

  const [data, setData] = useState({
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
    image:
      'https://thumbs.dreamstime.com/b/arbustos-violetas-de-la-lavanda-campos-p%C3%BArpuras-los-colores-hermosos-116489097.jpg',
    photo:
      'https://thumbs.dreamstime.com/b/arbustos-violetas-de-la-lavanda-campos-p%C3%BArpuras-los-colores-hermosos-116489097.jpg',
  });

  const [infoURL, setinfoURL] = useState('');

  // expresion regular dayana /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/

  const pattern = new RegExp('^https?://[w-]+(.[w-]+)+[/#?]?.*$');
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === 'repo') {
      if (pattern.test(inputValue)) {
        setData({ ...data, repo: inputValue });
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
      setinfoURL(info.cardURL);
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
          <img className="image" src={cover} alt="" />

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
              <img className="image" src={user} alt="" />
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
              <input
                className="input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                minLength="2"
                value={data.slogan}
                onInput={handleInput}
              />
              <input
                className="input"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo"
                required
                value={data.repo}
                onInput={handleInput}
              />
              <input
                className="input"
                type="text"
                placeholder="Demo"
                name="demo"
                id="demo"
                value={data.demo}
                onInput={handleInput}
              />
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
              <textarea
                className="textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                value={data.desc}
                onInput={handleInput}
              ></textarea>
              <small className="message">{message}</small>
            </fieldset>
            <fieldset className="autor">
              <legend className="ask-info">
                <p className="subtitle">Cuéntanos sobre la autora</p>
                <hr className="line" />
              </legend>
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
              <input
                className="input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
                value={data.job}
                onInput={handleInput}
              />
            </fieldset>
            <section className="buttons-img">
              <button className="btn">Subir foto de proyecto</button>
              <button className="btn">Subir foto de autora</button>
            </section>
            <section className="buttons-img">
              <button className="btn-large" onClick={handleClickCreateCard}>
                Crear Tarjeta
              </button>
            </section>
            <section className="card">
              <span className="create"> La tarjeta ha sido creada: </span>
              {/* aqui he peusto un 3 para que se vaya el error */}
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
