import Image from 'next/image'

import FadeIn from 'components/Motion/FadeIn'
import Button from 'components/Button'

export default function Banner() {
  return (
    <>
      <section className='flex items-end'>
        <div className='flex-1 relative z-10 pl-5'>
          <h1 className='font-bold text-6xl mb-10 text-black leading-tight'>
            <span className='text-primary'>Masters</span> of Consistency and{' '}
            <span className='text-primary'>Quality</span>.
          </h1>
          <p className='text-lg mb-10 pr-14'>
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
          <div className='flex mb-24'>
            <Button href='#'>Explore</Button>
            <Button href='#' outline={true}>
              Contact Us
            </Button>
          </div>
          <div className='flex items-center justify-between mb-5'>
            <div className='relative'>
              <span className='absolute left-0 top-0 z-0 w-[41.44px] h-[45.19px] -translate-y-1/3'>
                <Image
                  src='/images/hero-detail-1.svg'
                  layout='fixed'
                  width={41.44}
                  height={45.19}
                  quality={100}
                ></Image>
              </span>
              <span className='text-black text-4xl font-medium mb-4 block relative z-10'>
                25,356
              </span>
              <p className='text-xl'>Projects Done</p>
            </div>
            <div className='relative'>
              <span className='absolute left-0 top-0 z-0 w-[41.44px] h-[45.19px] -translate-y-1/3'>
                <Image
                  src='/images/hero-detail-2.svg'
                  layout='fixed'
                  width={41.44}
                  height={45.19}
                  quality={100}
                ></Image>
              </span>
              <span className='text-black text-4xl font-medium mb-4 block relative z-10'>
                15,200
              </span>
              <p className='text-xl'>Buildings Done</p>
            </div>
            <div className='relative'>
              <span className='absolute left-0 top-0 z-0 w-[41.44px] h-[45.19px] -translate-y-1/3'>
                <Image
                  src='/images/hero-detail-3.svg'
                  layout='fixed'
                  width={41.44}
                  height={45.19}
                  quality={100}
                ></Image>
              </span>
              <span className='text-black text-4xl font-medium mb-4 block relative z-10'>
                350+
              </span>
              <p className='text-xl'>Total Employees</p>
            </div>
          </div>
        </div>
        <div className='flex-1 hero-image'>
          <FadeIn direction='top' delay={0.05}>
            <Image
              src='/images/hero.png'
              layout='responsive'
              width={744}
              height={933}
              quality={100}
            ></Image>
          </FadeIn>
        </div>
      </section>
      <div className='grid grid-cols-5 gap-[5.2vw] items-center bg-lightGray rounded-full p-20 mt-28 mb-28'>
        <div>
          <Image
            src='/images/client-1.png'
            layout='responsive'
            width={138}
            height={26}
            quality={100}
          ></Image>
        </div>
        <div>
          <Image
            src='/images/client-2.png'
            layout='responsive'
            width={122}
            height={25}
            quality={100}
          ></Image>
        </div>
        <div>
          <Image
            src='/images/client-3.png'
            layout='responsive'
            width={120}
            height={20}
            quality={100}
          ></Image>
        </div>
        <div>
          <Image
            src='/images/client-4.png'
            layout='responsive'
            width={95}
            height={33}
            quality={100}
          ></Image>
        </div>
        <div>
          <Image
            src='/images/client-5.png'
            layout='responsive'
            width={133}
            height={33}
            quality={100}
          ></Image>
        </div>
      </div>
    </>
  )
}
