import { useTranslations } from 'next-intl'

import WelcomeImg from './WelcomeImg'
import { Button } from './button'

export default function WelcomeCard() {
  const t = useTranslations('welcomecard')
  return (
    <div className="m-5 mt-14 flex flex-col rounded-lg p-2 shadow-lg sm:flex-row">
      <div className="rounded-lg bg-white p-8 text-center md:flex md:max-w-lg md:flex-col md:justify-between">
        <h1 className="pb-7 text-4xl capitalize">
          {t('title')} <span className="text-components">{t('titlespan')}</span>
        </h1>
        <p className="pb-10 leading-7">
          {t('content1')}{' '}
          <span className="font-semibold text-components">
            {t('contentspan')}
          </span>{' '}
          {t('content2')}
        </p>
        <div>
          <Button href={'/products'} content={t('btn')} />
        </div>
      </div>
      <WelcomeImg />
    </div>
  )
}
