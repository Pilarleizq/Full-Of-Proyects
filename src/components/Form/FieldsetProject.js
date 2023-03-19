const FieldsetProject = ({ data, handleInput, message }) => {
  return (
    <fieldset className="project-fieldset">
      <legend className="legend">
        <p className="legend-text">Cuéntanos sobre el proyecto</p>
        <hr className="legend-line" />
      </legend>

      <label className="form-label">
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

      <label className="form-label">
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

      <label className="form-label">
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

      <label className="form-label">
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

      <label className="form-label">
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

      <label className="form-label">
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
      <small className="error-message">{message}</small>
    </fieldset>
  );
};

export default FieldsetProject;
