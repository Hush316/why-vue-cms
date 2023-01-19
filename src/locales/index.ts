import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
const messages = {
  en: {
    message: {
      ...enLocale,
    },
  },
  zh: {
    message: {
      ...zhLocale,
    },
  },
}

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages,
})

export default i18n
