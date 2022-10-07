import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import talksData from '@/data/talksData'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import TalkListLayout from '@/layouts/TalkListLayout'

export default function Talks() {
  return (
    <>
      <PageSEO
        title={`Talks - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/talks`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Talks
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            You can find my talks here
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {talksData.slice(0, 4).map((d) => (
              <Card
                key={d.title}
                title={d.title}
                date={d.date}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
          <div className="-m-4 flex flex-wrap">
            <TalkListLayout talks={talksData.slice(4, talksData.length)} title="Past Talks" />
          </div>
        </div>
      </div>
    </>
  )
}
