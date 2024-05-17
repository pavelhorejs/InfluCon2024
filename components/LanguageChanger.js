'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '/i18nConfig';
import { motion } from 'framer-motion';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = newLocale => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'normal',
    marginRight: '10px',
    marginLeft: '5px',
  };

  const activeButtonStyle = {
    fontWeight: 'bold',
  };

  return (
    <div>
      <motion.button
        whileHover={{ scale: 0.97 }}
        style={{
          ...buttonStyle,
          ...(currentLocale === 'cs' ? activeButtonStyle : {}),
        }}
        onClick={() => handleChange('cs')}
      >
        CZ 
      </motion.button>
      |
      <motion.button
       whileHover={{ scale: 0.97 }}
        style={{
          ...buttonStyle,
          ...(currentLocale === 'en' ? activeButtonStyle : {}),
        }}
        onClick={() => handleChange('en')}
      >
        EN
      </motion.button>
    </div>
  );
}
