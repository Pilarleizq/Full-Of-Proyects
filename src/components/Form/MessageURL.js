const MessageURL = ({ isCreatedCard, isCompletedForm, infoURL }) => {
  return (
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
  );
};

export default MessageURL;
