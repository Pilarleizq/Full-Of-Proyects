import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [desc, setDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [image, setImage] = useState('');

  const handleInput = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'slogan') {
      setSlogan(inputValue);
    } else if (inputName === 'technologies') {
      setTechnologies(inputValue);
    } else if (inputName === 'repo') {
      setRepo(inputValue);
    } else if (inputName === 'demo') {
      setDemo(inputValue);
    } else if (inputName === 'desc') {
      setDesc(inputValue);
    } else if (inputName === 'autor') {
      setAutor(inputValue);
    } else if (inputName === 'job') {
      setJob(inputValue);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">{name || 'Elegant Workspace'}</h2>
              <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {desc ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!`}
              </p>
              <section className="technologies">
                <p className="text">{technologies || 'React JS, MongoDB'}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{job || 'Full Stack Developer'}</p>
              <p className="name">{autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={name}
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={slogan}
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={repo}
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value={demo}
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={technologies}
              onInput={handleInput}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={desc}
              onInput={handleInput}
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              value={autor}
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value={job}
              onInput={handleInput}
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            {/* aqui he peusto un 3 para que se vaya el error */}
            <a href="3" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
