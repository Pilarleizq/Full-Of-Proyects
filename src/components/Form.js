import GetAvatar from './GetAvatar';

const Form = ({data, message}) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
      };

    return (

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
)};

export default Form;