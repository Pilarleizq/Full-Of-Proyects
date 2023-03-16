const FieldsetAuthor = ({ data, handleInput }) => {
  return (
    <fieldset className="autor">
      <legend className="ask-info">
        <p className="subtitle">Cuéntanos sobre la autora</p>
        <hr className="line" />
      </legend>
      <label className="label-form">
        {' '}
        Nombre:
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
      <label className="label-form">
        Trabajo:
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
  );
};

export default FieldsetAuthor;
