import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import TypeOne from '@/components/forms/TypeOne'
import Verify from '@/components/verify/Verify'
import Contact from '@/components/contact/Contact'

const page = () => {
  return (
    <>
    {/* hero */}
    <div className={`${styles.hero} py-8 w-full`}>
      <div className='container'>
        <div className='flex flex-col justify-between gap-8 items-center sm:flex-row'>
          <div className="flex flex-col w-full sm:w-1/2">
            <h1 className='text-2xl font-bold leading-snug  mb-4 text-center uppercase text-white sm:text-start sm:text-5xl sm:leading-snug'>Verify Gift Cards</h1>
            <p className='text-center text-white sm:text-start'>
              Utilize our adaptable and streamlined systems to ensure a strong verification.
              Our intelligent algorithms operate with great speed to
              deliver sufficient information to you
            </p>
            <Link href={"/"} className={` ${styles.actionBTN} text-white text-sm font-bold w-40 text-center rounded-md py-4 my-6 block mx-auto sm:mx-0`}>Verify Now</Link>
          </div>
          <img src='/cardimg1.webp' className='w-full sm:w-1/2'/>
        </div>
      </div>
    </div>
    {/* try for free */}
    <section className={styles.skewWrap}>
        <div className={`container flex flex-col justify-between items-center py-10 sm:flex-row`}>
        <img src="/cardimg2.webp" alt="" className='w-2/3 sm:w-1/3' />
        <div className="flex flex-col justify-between items-center gap-6 w-full sm:max-w-screen-md">
          <h2 className='text-white leading-snug mt-10 max-w-screen-sm  mb-4 text-center sm:text-start sm:text-2xl sm:leading-snug sm:mt-0'>
              We have successfully validated more
              than 12,000 gift cards.
              Verify yours now.
          </h2>

          <a href="/"  className={`block ${styles.actionBTN2}`}>Try for free</a>
        </div>
        </div>
    </section>
    {/* verify */}
    <div id='verify'>
      <Verify/>
    </div>
    {/* services */}
    <section className={`${styles.servicesWrap} py-10`}>
      <div className={`container`}>
        <h1 className='text-xl text-center text-white font-bold underline decoration-sky-950 underline-offset-8 sm:text-3xl'>Our Services</h1>
        <p className='text-center sm:text-lg text-white py-5'>
          Leverage our agile and efficient frameworks to provide a robust verification and synopsis for high level reviews on your giftcards
        </p>
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center text-center bg-sky-950 py-5 rounded-lg max-w-2xl px-4 w-full sm:w-1/3">
            <img width="96" height="96" src="https://img.icons8.com/fluency/96/bullish.png" alt="bullish"/>
            <h3 className='text-2xl text-white my-3 font-bold'>High Performance</h3>
            <p className='text-white'>
              Our efficient smart algorithms work swiftly to provide you with comprehensive information regarding your gift card. We highly value our customers' time, which is why we strive to deliver prompt responses to your requests.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-black py-5 rounded-lg max-w-2xl px-4 w-full sm:w-1/3">
            <img width="96" height="96" src="https://img.icons8.com/nolan/64/private2.png" alt="private2"/>
            <h3 className='text-2xl text-white my-3 font-bold'>Secured and Encrypted</h3>
            <p className='text-white'>
              At CardsChecker we prioritize the security and encryption of our customers' gift card details. We take strong measures to ensure that no attackers or false identities can intercept or compromise your verification operations. Your privacy and protection are of utmost importance to us.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-900 py-5 rounded-lg max-w-2xl px-4 w-full sm:w-1/3">
          <img width="96" height="96" src="https://img.icons8.com/color-glass/48/decentralized-network.png" alt="decentralized-network"/>
            <h3 className='text-2xl text-white my-3 font-bold'>Decentralized</h3>
            <p className='text-white'>
              Our intelligent frameworks are constructed on a decentralized platform, guaranteeing that clients' gift card details are not stored anywhere on the server. We prioritize your privacy and security by promptly deleting your card details after the verification operations are completed.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Contact/>
    </>
  )
}

export default page