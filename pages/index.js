import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'
import Banner from '../public/images/welcome-banner.svg'
import styles from '../styles/index.module.css'
import Aside from '../components/aside'
import Image from 'next/image'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="grid gap-x-28 grid-flow-col lg:grid-flow-row">
      <div>
        <Banner viewBox="0 0 965 294" className={`banner ${styles.banner}`} />

        <section id="intro" className="section-header mb-10">
          <h1 className="text-5xl mb-8 leading-snug sm:text-4xl sm:leading-normal">
            Buttons. Badges. <br /> Battlestar Galactica.
          </h1>
          <div className="grid gap-x-9 grid-flow-col sm:grid-flow-row">
            <p className="leading-loose">
              Hello! 👋 <span className="spacer" />
              I’m a UX Engineer specialized in crafting large-scale design
              system solutions so teams can easily get what they need to deliver
              personalized experiences.
            </p>
            <p className="leading-loose">
              I love helping engineers and designers speak the same language,
              while coaching teams to consider design-thinking principles and
              platform limitations.
            </p>
          </div>
        </section>
        <section className="mb-20 featured-post">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-gray-600 dark:text-gray-400 tracking-widest mb-4 mr-4 inline-block uppercase">
              <span className="spacer">✨</span>Fresh post
            </span>
            <Link href="/blog">
              <a className="text-sm">All posts</a>
            </Link>
          </div>
          {posts.slice(0, 1).map((post, i) => (
            <div className="post" key={i}>
              <PostPreview key={post.link} post={post} />
            </div>
          ))}
        </section>
        <section id="faq" className="mb-20 prose dark:prose-dark">
          <h2>Frequently asked questions</h2>
          <dl>
            <dt>
              <h3>What is this site?</h3>
            </dt>
            <dd>
              <p>
                I've always wanted a space where I could implement a few
                experiments and learn from them. You can consider this site a
                constant work in progress.
              </p>
            </dd>

            <dt>
              <h3>What's a UX Engineer?</h3>
            </dt>
            <dd>
              <p>
                A UX Engineer is someone who specializes in bringing designs to
                life through code, most commonly seen working within design
                systems teams.
              </p>
              <p>
                <a href="https://kellyharrop.com/blog/2021/ux-engineering">
                  Check out my blog post
                </a>{' '}
                for more details.
              </p>
            </dd>

            <dt>
              <h3>Did you know about [typo, bug, etc]?</h3>
            </dt>
            <dd>
              <p>
                Whoops, thanks for catching that. Feel free to{' '}
                <a href="https://github.com/kharrop/website/issues/new">
                  create an issue
                </a>
                .
              </p>
            </dd>
          </dl>
        </section>
        <section id="todo" className="mb-20 prose dark:prose-dark">
          <Image
            src="/images/wireframe.png"
            alt="Wireframe sketches in a notebook"
            layout="responsive"
            width="960"
            height="300"
          />
          <h2>Coming soon...</h2>
          <p>
            Since this site was thrown together at the last minute, here are
            some things to look forward to:
          </p>
          <div className="prose dark:text-gray-200">
            <ul>
              <li>Improved responsive styles</li>
              <li>Cleaned up CSS (it's a mess!)</li>
              <li>Converting more components to TypeScript</li>
              <li>More content</li>
              <li>More automation</li>
              <li>More everything 😅</li>
            </ul>
          </div>
        </section>
      </div>
      <aside className="w-40 lg:w-full">
        <Aside />
      </aside>
    </div>
  )
}
