import GetAvatar from './GetAvatar';
import FieldsetProject from './FieldsetProject';
import FieldsetAuthor from './FieldsetAuthor';
import BtnCreateCard from './BtnCreateCard';
import MessageURL from './MessageURL';

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
        </section>
        <section className="buttons-img">
          <BtnCreateCard
            handleClickCreateCard={handleClickCreateCard}
            value={'CREAR TARJETA'}
          />
        </section>
        <MessageURL
          isCreatedCard={isCreatedCard}
          isCompletedForm={isCompletedForm}
          infoURL={infoURL}
        />
      </form>
    </section>
  );
};

export default Form;