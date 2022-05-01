import Image from 'next/image'

import Button from 'components/Button'

export default function Experience() {
  return (
    <section>
      <div className='grid grid-cols-2 gap-[3vw] mb-[5.72vw]'>
        <div>
          <p className='text-lg mb-[1.5625vw]'>
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
          <Button href='#'>Explore</Button>
        </div>
        <div>
          <h2 className='text-5xl text-black font-medium leading-tight mt-[-20px]'>
            Why Choose us for best construction experience
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-[3vw]'>
        <div>
          <Image
            src='/images/experience.png'
            layout='responsive'
            width={584}
            height={850}
            quality={100}
          ></Image>
        </div>
        <div>
          <div className='flex items-end mb-36'>
            <div className='flex-none mr-9 relative w-[102px] h-[102px] flex items-end'>
              <Image
                src='/images/experience-detail-1.svg'
                layout='fixed'
                width={76}
                height={76}
                quality={100}
              ></Image>
              <span className='text-black text-7xl font-semibold absolute right-[-35%] top-[35%] translate-x-[-50%] translate-y-[-50%]'>
                01
              </span>
            </div>
            <div>
              <p className='text-lg'>
                And residence for met the estimable disposing. Mean if he they
                been no hold mr. Is at much do made took held help.
              </p>
            </div>
          </div>
          <div className='flex items-end mb-36'>
            <div className='flex-none mr-9 relative w-[102px] h-[102px] flex items-end'>
              <Image
                src='/images/experience-detail-2.svg'
                layout='fixed'
                width={76}
                height={76}
                quality={100}
              ></Image>
              <span className='text-black text-7xl font-semibold absolute right-[-35%] top-[35%] translate-x-[-50%] translate-y-[-50%]'>
                02
              </span>
            </div>
            <div>
              <p className='text-lg'>
                Up maids me an ample stood given. Certainty say suffering his
                him collected intention promotion.
              </p>
            </div>
          </div>
          <div className='flex items-end'>
            <div className='flex-none mr-9 relative w-[102px] h-[102px] flex items-end'>
              <Image
                src='/images/experience-detail-3.svg'
                layout='fixed'
                width={76}
                height={76}
                quality={100}
              ></Image>
              <span className='text-black text-7xl font-semibold absolute right-[-35%] top-[35%] translate-x-[-50%] translate-y-[-50%]'>
                03
              </span>
            </div>
            <div>
              <p className='text-lg'>
                Good draw knew bred ham busy his hour. Ask agreed answer rather
                joy nature admire wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
