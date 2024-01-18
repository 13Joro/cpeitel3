import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kervin Amiel Josh K. Canlas. I'm an IT student from University of the Assumption.</p>
        

        <ul>
          <li>I expect this subject to be a challenging one</li>
          <li>I expect to learn Java</li>
          <li>I expect to learn and have a knowledge on how to design and submit a website.</li>
        </ul>
        <p>10 Things That Require Zero Talent:</p>
    <ul>
      <ol>1. Being On Time.</ol>
      <ol>2. Making An Effort.</ol>
      <ol>3. Being High Energy.</ol>
      <ol>4. Having A Positive Attitude.</ol>
      <ol>5. Being Passionate.</ol>
      <ol>6. Using Good body Language.</ol>
      <ol>7. Being Caochable.</ol>
      <ol>8. Doing A Little Extra.</ol>
      <ol>9. Being Prepared.</ol>
      <ol>10. Having A Strong Work Ethic.</ol>
  </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
