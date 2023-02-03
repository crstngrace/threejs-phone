import { useState, useEffect, useRef, useContext, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

import { GlobalStyles } from '../styles/Global.styled';
import { StyledMain } from '../styles/Main.styled';
import { StyledLandingContent } from '../styles/Landing.styled';
import { StyledArticle, StyledArticleHeader } from '../styles/Article.styled';
import { StyledSection } from '../styles/Section.styled';

import Logo from './../public/logo.png';
import Scene from '../components/Scene';

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);

  const setIsLoaded = useCallback((value) => setLoaded(value));
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // useEffect(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     smoothTouch: 0.1
  //   });
  // });

  return (
    <>
      <Head>
        <title>The Cherry Collections</title>
      </Head>

      <GlobalStyles />
      <Scene state={[isLoaded, setIsLoaded]} />

      {/* <div id='smooth-wrapper'>
        <div id='smooth-content'> */}
      <StyledMain isLoaded={isLoaded}>
        <StyledSection>
          <StyledLandingContent>
            <Image src={Logo} alt='Orange Logo' width={80} height={80} />
            <h1>Capture your best moments</h1>
            <p>
              Capture every moment with our latest phone. Quality at the best
              price!
            </p>
            <hr />
            <ul>
              <li>Fully Customizable</li>
              <li>Scalable</li>
              <li>Impressive Display</li>
            </ul>
          </StyledLandingContent>
        </StyledSection>

        <StyledSection>
          <StyledArticle>
            <StyledArticleHeader>
              <h2>We simplify your needs</h2>
              <Image src={Logo} alt='Orange Logo' width={60} height={60} />
            </StyledArticleHeader>

            <p>
              Lorem ipsum dolor sit amet. Qui autem vero hic internos quia
              repellat cupiditate est velit velit quo omnis quidem eos atque
              eligendi rem nobis necessitatibus. Aut reiciendis voluptatem 33
              officiis iusto est debitis quia hic itaque placeat aut aliquid
              tempora.
            </p>
            <p>
              Non voluptas nisi eum totam impedit eum voluptatem sunt ad
              excepturi modi eos mollitia dolorum. Sit iusto dolorem vel
              voluptatum voluptates qui culpa quidem ut nobis itaque aut
              corporis dolorum id natus voluptatem. Ut quas quaerat et ullam
              quia id veritatis inventore quo deleniti reiciendis aut nemo sint
              est consequuntur molestias.
            </p>
            <p>
              Et expedita quod qui asperiores quos ut quibusdam nihil sit nisi
              mollitia sit harum dicta. Cum illum nihil qui architecto saepe qui
              autem sequi 33 omnis exercitationem et nihil odio ut repudiandae
              autem.
            </p>
          </StyledArticle>
        </StyledSection>
      </StyledMain>
      {/* </div>
      </div> */}
    </>
  );
}
