const FieldsetProject = ({ data, handleInput, message }) => {
  return (
    <fieldset className="project">
      <legend className="ask-info">
        <p className="subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="line" />
      </legend>

      <label className="label-form">
        {' '}
        Nombre del proyecto:
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

      <label className="label-form">
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

      <label className="label-form">
        {' '}
        Repo:
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

      <label className="label-form">
        Demo:
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

      <label className="label-form">
        Tecnologías:
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

      <label className="label-form">
        Descripción:
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
  );
};

export default FieldsetProject;
