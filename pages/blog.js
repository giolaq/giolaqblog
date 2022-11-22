import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import Card from '@/components/Card'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <Card
          title={'GioLaq HashNode Blog'}
          date={''}
          description={'Here you can find all my articles'}
          imgSrc={'/static/images/bloghashnodecard.png'}
          href={'https://blog.giolaq.dev'}
        />
      </div>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Old Posts"
      />
    </>
  )
}
