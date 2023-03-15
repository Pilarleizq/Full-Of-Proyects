import GetAvatar from './GetAvatar';
import FieldsetProject from './FieldsetProject';
import FieldsetAuthor from './FieldsetAuthor';
const Form = ({
  data,
  message,
  infoURL,
  isCreatedCard,
  isCompletedForm,
  updateImages,
  updatePhoto,
  handleInput,
  handleClickCreateCard,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="form">
      <h2 className="title">Información</h2>
      <form onSubmit={handleSubmit}>
        <FieldsetProject
          data={data}
          handleInput={handleInput}
          message={message}
        ></FieldsetProject>
        <FieldsetAuthor data={data} handleInput={handleInput}></FieldsetAuthor>

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
  );
};

export default Form;
