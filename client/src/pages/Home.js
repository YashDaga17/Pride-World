import React from "react"
import HeroImg from '../assets/hero1.png'
import InspirationImg from '../assets/inspiration1.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className='md:mx-28 mx-4 pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-4'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl italic font-semibold'>{t('homeTitle')}</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'> {t('hoemAbout')} </p>

          <div className="flex flex-col space-y-4">

            <Link to="/posts">
              <button className='bg-tertiary py-2 px-8 rounded-md text-xl md:text-2xl text-white'>{t('homeCheckPost')}</button>
            </Link>

            <Link to="/exercise">
              <button className='bg-tertiary py-2 px-8 rounded-md text-xl md:text-2xl text-white'>{t('navLinkExercise')}</button>
            </Link>

          </div>

        </div>
        <div className="grid place-items-center drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="900" height="700" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={InspirationImg} alt="img" width="300" height="500" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl italic font-semibold'>{t('homwWhatEsle')}</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> {t('homeDesc')}
          </p>
          <ul className="text-xl">
            <li className="list-disc">{t('homePt1')}</li>
            <li className="list-disc">{t('homePt2')}</li>
            <li className="list-disc">{t('homePt3')}</li>
            <li className="list-disc">{t('homePt4')}</li>
            <li className="list-disc">{t('homePt5')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
