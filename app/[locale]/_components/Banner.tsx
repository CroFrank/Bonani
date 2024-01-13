import { useTranslations } from 'next-intl'
import Image from 'next/image'

import WelcomeImg from './WelcomeImg'
import { Button } from './button'

export default function Banner() {
  const t = useTranslations('banner')
  return (
    <div className="m-5 mt-14 rounded-lg p-2 shadow-lg">
      <div className="m-5 mt-14 flex flex-col rounded-lg p-2 shadow-lg sm:flex-row">
        <div className="rounded-lg bg-white p-8 text-center md:flex md:max-w-lg md:flex-col md:justify-between">
          <h1 className="pb-7 text-4xl capitalize">{t('title')}</h1>
          <p className="pb-10 leading-7">
            {t('text1')}{' '}
            <span className="font-semibold text-components">
              {t('text-bold')}
            </span>{' '}
            {t('text2')}
          </p>
          <div>
            <Button href={'/products'} content={t('btn')} />
          </div>
        </div>
        <WelcomeImg />
      </div>
      <table className="w-full">
        <tbody>
          <tr className="text-xs sm:text-base text-center flex items-end justify-around">
            <td className="flex flex-col items-center justify-center">
              <Image
                src="/rocket.svg"
                width={35}
                height={35}
                alt="svg rocket"
              />
              {t('span1')}
            </td>
            <td className="flex flex-col items-center justify-center">
              <Image
                src="/personalised.svg"
                width={45}
                height={45}
                alt="svg girl celebrate"
                className="pb-2"
              />
              {t('span2')}
            </td>
            <td className="flex flex-col items-center justify-center">
              <Image
                src="/handmade.svg"
                width={45}
                height={45}
                alt="svg hand"
                className="pb-2"
              />
              {t('span3')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
