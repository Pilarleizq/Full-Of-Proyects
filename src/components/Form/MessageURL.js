const MessageURL = ({ isCreatedCard, isCompletedForm, infoURL }) => {
  return (
    <section className={`message-create-card ${isCreatedCard ? '' : 'hidden'}`}>
      <span className="info-create">
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
