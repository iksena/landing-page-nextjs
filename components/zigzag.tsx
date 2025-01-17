import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import Kegiatan from '@/public/images/kegiatan.jpeg'
import Assistance1 from '@/public/images/assistance-1.jpeg'
import Assistance2 from '@/public/images/assistance-2.jpeg'
import Research1 from '@/public/images/research-1.jpeg'
import Training2 from '@/public/images/training-2.jpeg'
import Training3 from '@/public/images/training-3.jpg'
import Training6 from '@/public/images/training-6.jpeg'

interface ZigZagProps {
  projects: any
}

const CheckIcon = () => (
  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
)

export default function Zigzag({ projects }: ZigZagProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Productivity matters</div>
            <h1 className="h2 mb-4">PT KPI menawarkan berbagai solusi untuk bisnis Anda</h1>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p> */}
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Assistance1} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Consultancy</div>
                  <h3 className="h3 mb-3">{projects.consultant.title}</h3>
                  <p className="text-xl text-gray-400 mb-4">{projects.consultant.description}</p>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Research1} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pr-4 lg:pr-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Research</div>
                  <h3 className="h3 mb-3">{projects.research.title}</h3>
                  <p className="text-xl text-gray-400 mb-4">{projects.research.description}</p>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Assistance2} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Assistance</div>
                  <h3 className="h3 mb-3">{projects.assistance.title}</h3>
                  <p className="text-xl text-gray-400 mb-4">{projects.assistance.description}</p>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Training2} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Certification</div>
                  <h3 className="h3 mb-3">{projects.certification.title}</h3>
                  <p className="text-xl text-gray-400 mb-4">{projects.certification.items[0].description}</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    {projects.certification.items[0].items.map((item) => (
                      <li key={item} className="flex items-center mb-2">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Training3} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Training</div>
                  <h3 className="h3 mb-3">{projects.training.title}</h3>
                  <p className="text-xl text-gray-400 mb-4">{projects.training.items[0].description}</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    {projects.training.items[0].items.map((item) => (
                      <li key={item} className="flex items-center mb-2">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Training6} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Measurement</div>
                  <h3 className="h3 mb-3">{projects.measurement.title}</h3>
                  <p className="text-xl text-gray-400 mb-4">{projects.measurement.items[0].title}</p>
                  <div className="text-lg text-gray-400 flex items-center mb-2">
                    <CheckIcon />
                    <span>{projects.measurement.items[0].description}</span>
                  </div>
                  <p className="text-xl text-gray-400 mb-4">{projects.measurement.items[1].title}</p>
                  <div className="text-lg text-gray-400 flex items-center mb-2">
                    <CheckIcon />
                    <span>{projects.measurement.items[1].description}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
