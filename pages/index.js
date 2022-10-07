import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="">
            <h1 className="mb-2 text-2xl font-extrabold leading-11 tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              I'm <span className="text-primary-color dark:text-primary-color-dark">Giovanni</span>
            </h1>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I ❤️ software development and communities!
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I’m currently working on{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#fff176"
              animationDelay={800}
              animationDuration={1200}
            >
              <Link href={'https://developer.amazon.com/apps-and-games'}> Amazon Appstore </Link>{' '}
            </RoughNotation>
          </p>

          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I like{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#FF0000"
              animationDelay={1700}
              animationDuration={1200}
            >
              to cook 🍝{' '}
            </RoughNotation>
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <RoughNotation
              type="underline"
              show={true}
              color="#00FF00"
              animationDelay={1900}
              animationDuration={1200}
            >
              dance 💃🕺{' '}
            </RoughNotation>
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            and{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#0000FF"
              animationDelay={2100}
              animationDuration={1200}
            >
              run 🏃‍♂️{' '}
            </RoughNotation>
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
