import Image from 'next/image'

export default function Experience() {
  return (
    <section>
      <div className='grid grid-cols-2 gap-[3vw] mb-[5.72vw]'>
        <div>
          <p className='text-lg mb-[1.5625vw]'>
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
          <a href='#'>Explore</a>
        </div>
        <div>Why Choose us for best construction experience</div>
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
          <div>
            <div>
              <Image
                src='/images/experience-detail-1.svg'
                layout='fixed'
                width={76}
                height={76}
                quality={100}
              ></Image>
              <span>01</span>
            </div>
            <div>
              <p>
                And residence for met the estimable disposing. Mean if he they
                been no hold mr. Is at much do made took held help.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image
                src='/images/experience-detail-2.svg'
                layout='fixed'
                width={76}
                height={76}
                quality={100}
              ></Image>
              <span>02</span>
            </div>
            <div>
              <p>
                Up maids me an ample stood given. Certainty say suffering his
                him collected intention promotion.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image
                src='/images/experience-detail-3.svg'
                layout='fixed'
                width={76}
                height={76}
                quality={100}
              ></Image>
              <span>03</span>
            </div>
            <div>
              <p>
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
