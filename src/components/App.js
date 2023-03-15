import '../styles/App.scss';
import logo from '../images/logo-adalab.png';
import { useEffect, useState } from 'react';
import dataApi from '../service/api';
import ls from '../service/localStorage';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';

function App() {
  const [message, setMessage] = useState('');

  const [data, setData] = useState({
    name: ls.get('dataLS', {}).name || '',
    slogan: ls.get('dataLS', {}).slogan || '',
    technologies: ls.get('dataLS', {}).technologies || '',
    repo: ls.get('dataLS', {}).repo || '',
    demo: ls.get('dataLS', {}).demo || '',
    desc: ls.get('dataLS', {}).desc || '',
    autor: ls.get('dataLS', {}).autor || '',
    job: ls.get('dataLS', {}).job || '',
    image: ls.get('dataLS', {}).image || '',
    photo: ls.get('dataLS', {}).photo || '',
  });

  const [infoURL, setinfoURL] = useState('');

  const [isCreatedCard, setIsCreatedCard] = useState(false);

  const [isCompletedForm, setCompletedForm] = useState(false);

  // expresion regular dayana /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/

  useEffect(() => {
    ls.set('dataLS', data);
  }, [data]);

  const updateImages = (avatar) => {
    setData({ ...data, image: avatar });
  };
  const updatePhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  const pattern = new RegExp('^https?://[w-]+(.[w-]+)+[/#?]?.*$');

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === 'repo' || inputName === 'demo') {
      if (pattern.test(inputValue)) {
        setData({ ...data, [inputName]: inputValue });
      } else {
        setMessage('Introduce un URL válida');
      }
    } else {
      setData({ ...data, [inputName]: inputValue });
    }
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((info) => {
      console.log(info);
      if (info.success) {
        setCompletedForm(true);
        setIsCreatedCard(true);
        setinfoURL(info.cardURL);
      } else {
        setIsCreatedCard(true);
        setCompletedForm(false);
      }
    });
  };

  return (
    <div className="container">
      <Header logo={logo}></Header>
      <main className="main">
        <Preview data={data}></Preview>
        <Form
          message={message}
          data={data}
          infoURL={infoURL}
          isCreatedCard={isCreatedCard}
          isCompletedForm={isCompletedForm}
          updateImages={updateImages}
          updatePhoto={updatePhoto}
          handleInput={handleInput}
          handleClickCreateCard={handleClickCreateCard}
        ></Form>
      </main>
    </div>
  );
}

export default App;
