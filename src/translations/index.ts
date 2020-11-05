import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import es from './es.json';
import fr from './fr.json';
import nl from './nl.json';
import de from './de.json';
import it from './it.json';

const fallback = { languageTag: 'fr' }; // default language
const translations = { fr, es, nl, de, it };

/* #### GET USER PREFERED LANGUAGE ### */
const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback;

i18n.defaultLocale = 'fr';
i18n.fallbacks = true;
i18n.locale = languageTag;
i18n.translations = translations;

export default i18n;
