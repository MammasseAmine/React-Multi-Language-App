import logo from './logo.svg';
import './App.css';
import { Trans, useTranslation } from 'react-i18next';

function App() {

  const {t, i18n} = useTranslation();
  const ChangeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  return (
    <div className="App">
    <button onClick={()=>ChangeLanguage("fr")}>FR</button>
    <button onClick={()=>ChangeLanguage("en")}>EN</button>
      <hr/>
      <h1>{t("title")}</h1>
      <Trans i18nKey="description.part1">
      Pour commencer, modifiez <code>src/App.js</code> et enregistrez pour recharger.
      </Trans>
      <div>{t("description.part2")}</div>
    </div>
  );
}

export default App;
