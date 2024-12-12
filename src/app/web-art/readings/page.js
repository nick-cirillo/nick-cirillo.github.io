'use client'

import "../about/style.css";
import "../web-art-globals.css"
import { useEffect, useState } from "react";


export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="s1">
      <div className={`pf-top-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
        <img 
          src="/icons/up-arrow-baby-powder.webp"
          alt="Scroll to top"
          className="pf-top-icon"
        />
      </div>

      <div id="pf-header-banner">
          <a id="pf-readings-button" href="/web-art/readings">
            <img 
              id="pf-readings-icon"
              src="/icons/open-book.webp" 
              alt="Readings"
            ></img>
          </a>
          <a id="pf-header-name" href="/">Nicholas Cirillo</a>
          <a id="pf-course-button" href="https://www.design.upenn.edu/courses/dsgn-1020" target="_blank" rel="noopener noreferrer">
            <img 
              id="pf-course-icon"
              src="/icons/penn-shield.webp" 
              alt="Readings"
            ></img>
          </a>
        </div>

      <div className="content">
        <div className="title-section">
          <a className="button-container" href="./">
            <div className="back-button">
              <img 
                className="back-icon"
                src="/icons/left-arrow-oxford-blue.webp" 
                alt="Back"
              ></img>
            </div>
          </a>
          <div className="header-container">
            <p className="label">ART OF THE WEB</p>
            <p className="title">Reading Responses</p>
            <p className="subtitle">Train your brain</p>
          </div>
        </div>

        <div className="content-section">
          <div className="text-container">
            <p className="section-label">CREATIVE BRIEF</p>
            <p className="section-title">Response Guidelines</p>
            <p className="section-quote">&ldquo;For each reading, students are responsible for submitting a short, written paragraph 
              response (3-5 sentences) along with at least 2 &ldquo;discussion questions&rdquo; in an allotted, class-wide space on Canvas. With
              your responses, you must communicate that you understood the basic ideas within the reading, but you may also use this space 
              to critique or explore (build upon) any of these concepts. Your questions will be selected to assist with in-class reading 
              discussions — consider both individual and classwide implications and provocations.&rdquo;</p>
          </div>
        </div>

        <div className="content-section-top">
          <div className="text-container">
            <p className="section-label">WEEK 2</p>
            <p className="section-title">Ulises Carrión: Mail Art and the Big Monster</p>
            <div className="section-body">
            I found Carrión&apos;s text less confusing than I expected, actually - the way he approaches investigating
             the definition of mail art reminds me of mathematical proofs, with their rigor and  thoroughness. 
             Especially interesting was the trade-off of which system - the &ldquo;artwork&rdquo; itself or the postal system 
             - bore more of the weight of the art, so to speak.  
            <div className="section-body-break"/>
            I also found a definition of the &ldquo;Big Monster,&rdquo; though purposely mysterious, to pop out at me - the Monster was dread, 
            the creeping sense that we all have (that one day we&apos;ll die), embodied through the banality of the rules-based postal 
            system (what a seemingly wasteful way to spend time), and rebelled against by the mail art, by which we subvert those 
            rules and stave off death (including the stagnant death of doing nothing while alive).
            </div>
        
          </div>
          <div className="text-container">
            <p className="section-label">WEEK 3</p>
            <p className="section-title">Laurel Schwulst & Édouard U.: Selections from &ldquo;How Do You Use the Internet Mindfully?&rdquo;</p>
            <div className="section-body">
            Laurel Schwulst&apos;s excerpt ties directly into why I&apos;ve been putting off making a personal website for so long. It seems strange - 
            I&apos;m co-leading one of Penn&apos;s most prominent web development organizations, and I don&apos;t even have my own website? In fact, I&apos;ve 
            barely even tried.
            <div className="section-body-break"/>
            I know why, now. It&apos;s a lack of purpose for the thing. I don&apos;t need nicholascirillo.com to be a second resume - a collection of 
            completed works, to paraphrase Schwulst. It&apos;s too corporate. I already have a second resume and it is called linkedin dot com 
            slash nicholas dash cirillo dash slash. And that is far and beyond corporate enough for me.
            <div className="section-body-break"/>
            What to make it, then? I don&apos;t know, but I&apos;m sure I will spend some time chewing on those metaphors - house, bookshelf, plant, garden, puddle 
            - and slowly drip drop some ideas into a cool little website. 
            <div className="section-body-break"/>
            Édouard&apos;s reading did not click with me as much. I love the feeling of being absorbed into a linear narrative, and I don&apos;t know if I can give 
            that up. His method - so many books open, Wikipedia accompanying a new film - reeks of internet chaos to me, and I&apos;m trying to escape that, 
            not embody it. It does sound like he would be a big fan of Obsidian, though. For those of you who don&apos;t know, it&apos;s a software that lets you 
            create a personal Wikipedia - and would let this author connect all his personal artifacts together.
            <div className="section-body-break"/>
            Questions:
            <div className="section-body-break"/>


            1. Do you prefer a personal website to have a specific form factor - house, shelf, plant, garden, etc? And what makes the website a
             &lsquo;personal&rsquo; website versus a project?
            <div className="section-body-break"/>
            2. How have seemingly siloed &lsquo;artifacts&rsquo; created novel results, either for you or someone else?
            </div>
        
          </div>
        </div>

        <div className="content-section-top">
          <div className="text-container">
            <p className="section-label">WEEK 4</p>
            <p className="section-title">Olia Lialina: STILL THERE - Ruins and Templates of Geocities</p>
            <div className="section-body">
            The preservation effort towards Geocities is akin to preserving old corpses for study. Whereas modern websites are updated 
            or taken down, these Geocities websites are frozen in time. I found this pretty compelling - I used to hang out on a few 
            forums as a kid that have long since been shut down, and only one or two pages are cataloged on the Wayback Machine. It 
            would be quite the journey to trawl through those forums again.
            <div className="section-body-break"/>

            Questions:
            <div className="section-body-break"/>

            1. Was there any predominant form of web art in Geocities, not counting embedded images?
            <div className="section-body-break"/>

            2. What can we learn about the modern web from the ruins of Geocities?
            </div>
        
          </div>
          <div className="text-container">
            <p className="section-label">WEEK 5</p>
            <p className="section-title">David Reinfurt: Selections from A *New* Program for Graphic Design</p>
            <div className="section-body">
            I found the introduction to Gestalt theory and its history quite compelling. I&apos;d always heard of &lsquo;gestalt&rsquo; as pattern 
            composition, the sum of the parts, etcetera - but I hadn&apos;t actually heard the perspective that gestalt is something 
            <span style={{fontStyle: "italic"}}> separate </span> 
            from the sum of the parts. I don&apos;t really agree with that assessment, as obviously changing any one part of the sum changes 
            the whole. I do, however, see where the author is coming from - our perception adds an unquantifiable ingredient to the mix 
            that fundamentally shapes the whole and creates something new from it. 
            <div className="section-body-break"/>

            Questions:
            <div className="section-body-break"/>

            1. What are some cool unconventional examples of gestalt theory in everyday life?
            <div className="section-body-break"/>

            2. Is the web itself a gestalt? Do all the discrete locations across the web seem to meld together into some greater whole? I feel as such, but I&apos;d love to hear what others think.
            </div>
        
          </div>
        </div>

        <div className="content-section-top">
          <div className="text-container">
            <p className="section-label">WEEK 6</p>
            <p className="section-title">Alessandro Ludovico & Florian Cramer: Selections from Post-Digital Print</p>
            <div className="section-body">
            This week&apos;s reading predicts that as digital media becomes more prominent, printed works will shift emphasis towards 
            being collector&apos;s items. However, in my observation, this hasn&apos;t happened for printed works yet - most people I know 
            still read physical books, and prefer physical books, rather than owning a Kindle or reading books on a laptop or phone. 
            For many, the tactility is extremely important - there is a physical indicator of progress across time, the experience 
            is embodied, and the text is readable without blue light, not to mention the psychological benefits. I have, however, 
            noticed this trend in music, which the author treats as a bellwether. Vinyl in particular has no real practical use, 
            but it has become popular as a collector&apos;s item and &lsquo;retro&rsquo; experience, despite being almost entirely inferior.
            <div className="section-body-break"/>

            Questions:
            <div className="section-body-break"/>

            Does the advancement of digital technologies ever guarantee that physical texts will become inferior? If so, what has been stopping this from happening?
            </div>
        
          </div>
          <div className="text-container">
            <p className="section-label">WEEK 8</p>
            <p className="section-title">Bojana Coklyat & Shannon Finnegan: Selections from Alt-Text as Poetry</p>
            <div className="section-quote">
              No response given.
            </div>
        
          </div>
        </div>

        <div className="content-section-top">
          <div className="text-container">
            <p className="section-label">WEEK 9</p>
            <p className="section-title">Ramsey Nasser: A Personal Computer for Children of All Cultures</p>
            <div className="section-body">
            I found the discussion about the Anglocentricity of programming to be quite compelling. In a way, the English foundation 
            of modern programming has continued to entrench Western, English-speaking cultures as the &ldquo;dominant&rdquo; cultures in software,
             much the same way as TSMC has entrenched Taiwan (and, by means of their contentious dynamic, China) as the dominant player
              in computer hardware.
              <div className="section-body-break"/>

            I&apos;m also wondering if the lingua franca Nasser mentions has developed at all. This isn&apos;t a leading or rhetorical question,
             I&apos;m generally curious - have programmers in other countries created libraries or projects in which variable names, 
             functions, etc. are written in their home languages, or some hybrid of English and another language? I would imagine 
             the pressure to remain with the English standard would be great, but considering the technological boom happening around
              the globe, it wouldn&apos;t surprise me.
              <div className="section-body-break"/>

            In my thinking about this article, there is also a tension between universalist and nationalist perspectives. My initial 
            gut reaction to this article was a twinge of sympathy followed by a &lsquo;so what?&rsquo; But this is undeniably influenced by my 
            background as an American - a white American who speaks only English, and thus has a strong connection only to my American
             culture, with shades of Italian-American tradition. With the tumult of geopolitics between the US and China, Russia, and
              various nations in the Arab world, it&apos;s easy to say, &ldquo;no, let&apos;s keep things Anglocentric, just the way they are.&rdquo;
              <div className="section-body-break"/>

            Whenever I detect this mindset, I think of Albert Einstein, who called nationalism &ldquo;an infantile disease ... the measles
             of mankind,&rdquo; for so many reasons, of which we see ominous parallels in American politics frequently. Dialogue and 
             understanding between cultures is crucial, and that&apos;s why I found this article so valuable - it opened my mind and 
             illuminated a new perspective.
             <div className="section-body-break"/>

            To engage further with these ideas, I brainstormed for a bit on how we can overcome these language barriers. One idea 
            I like is what I call &ldquo;localized aliasing,&rdquo; in which libraries can be written in any language under the hood, and 
            functions can have aliases (alternative names) in a variety of languages - for example, a function called &ldquo;waitFor()&rdquo; 
            could be called &ldquo;aspettaPer().&rdquo; 
            </div>
        
          </div>
          <div className="text-container">
            <p className="section-label">WEEK 10</p>
            <p className="section-title">Ben Duvall: Selections from New Modernism(s)</p>
            <div className="section-body">
            I found these readings pretty interesting regarding the different traditions of graphic design. I don&apos;t have much exposure 
            to art history or the visual arts in general, so hearing about the modernist/postmodernist traditions was a first for me. I
             also found the second chapter&apos;s focus on Disney to be unexpected - especially as references to Disney in graphic design and
              art have become steadily less stylized and more literal, and the unmodified iconography of Mickey Mouse himself is enough 
              to draw out a range of themes and emotions on American capitalism, the machine, and mass media. 
              <div className="section-body-break"/>

              My main question for this week would be a clarification - what exactly makes a &ldquo;hyperlink&rdquo; in the context of the first reading? I didn&apos;t quite understand the link between hyperlink and hypermodernism.
            </div>
        
          </div>
        </div>

        <div className="content-section-top">
          <div className="text-container">
            <p className="section-label">WEEK 12</p>
            <p className="section-title">Dot Tuer: Beyond the New Media Frame: The Poetics of Absence in Vera Frenkel&apos;s String Games</p>
            <div className="section-body">
            The connection between String Games and Body Missing, in my opinion, felt like a stretch. While I understood the themes 
            of gaps and loss through virtual disconnection, these themes did not emotionally resonate with me when holding the works
             next to each other in my mind. Instead, I saw Body Missing as more of an exploration, perhaps due to the web medium in
              which it sits.
              <div className="section-body-break"/>


            Most of the feelings of disconnection and loss were brought about by the passages, images, and layout, whereas the actual embodied 
            experience of navigating the webpages felt more to me like unearthing an archive or reading a story. Perhaps I&apos;m missing the author&apos;
            point here, but overall, I didn&apos;t click with the perspective in this week&apos;s readings.
            <div className="section-body-break"/>


            Rather than any specific questions, I&apos;d be more interested in hearing how others connected with the passage, and how others connected 
            String Games and Body Missing.
            </div>
        
          </div>
          <div className="text-container">
            <p className="section-label">WEEK 13</p>
            <p className="section-title">Paul Soulellis: Performing the Feed</p>
            <div className="section-body">
              I found this reading to be topical and prescient. The description of feeds as &ldquo;texture&rdquo; is resoundingly accurate,
               and I think this texture - for example, that of Instagram Reels - can be soothing, hence why we so often use it 
               as a coping mechanism. But the encroachment of some texture of misinformation, or even one of malignant disinformation
                (such as X), is much harder to detect than a blaringly norm-breaking event of some sort. I think we need to be vigilant
                 about the texture of content that we consume, and take more time to curate our feeds to genuinely meaningful content, 
                 or even detach ourselves from these feeds entirely.


            </div>
        
          </div>
        </div>

        <div className="content-section-top">
          <div className="text-container">
            <p className="section-label">WEEK 14</p>
            <p className="section-title">Neta Bomani & Sabii Borno: Beyond Dark Matter</p>
            <div className="section-body">
            Themes of control were paramount in this week&apos;s reading, particularly in discussion of the master/slave terminology, 
            and also in a broader sense, touching on feelings of helplessness and alienation we so often experience when using 
            computers. Whether it&apos;s poor documentation, insultingly bad user interfaces, or shady social media algorithms in which 
            we are what&apos;s for sale, computers can feel awfully constrained for something that we are often told will liberate us. 
            <div className="section-body-break"/>


            Where I break from the readings is in the overwhelmingly race-based perspective taken by the reading, and the 
            matter-of-factness in which it is delivered. The authors bill it as &ldquo;a story that children and adults can read 
            because it&apos;s simple.&rdquo; I disagree, and this assertion degrades the quality of conversation we can have, as it 
            functions as an implicit put-down on differing perspectives.
            <div className="section-body-break"/>


            I will readily agree that the master/slave paradigm is weighted with the history of chattel slavery, especially 
            in America, and is inseparable from the innumerable tragedies associated with slavery. I do not agree, however, 
            that this is the most relevant lens to analyze the themes of control and computation through. The loss of self-control
             associated with using algorithmically-curated feeds is a texture in itself, calling back to last week&apos;s readings, of 
             which nearly every person my age is intimately familiar.
             <div className="section-body-break"/>


            The idea that we can break free from this, tap into what Bomani, Morrison, and Borno call &ldquo;The Beyond,&rdquo; and realize 
            the true liberating potential of technology often appears distant, which is why the story&apos;s mission to remind the 
            reader of this is absolutely essential. Starting out by dethroning the master/slave relationship - perhaps with the 
            more nurturing &lsquo;parent/child,&rsquo; or something even more neutral - is an excellent start, as is the goal to resonate 
            with groups often marginalized in STEM. I do hope that computer scientists, digital artists, and technologists 
            continue to engage with these themes from both within and outside the perspective of race, and thus, create a 
            powerful message that resonates with anyone who feels captive to their computer.
            <div className="section-body-break"/>

            Questions:
            <div className="section-body-break"/>


            1. Did others connect more with the background of the characters in the story? How did this add to the themes of the reading?
            <div className="section-body-break"/>


            2. What other lenses can we view this through? In CIS 4120 (HCI), we studied how computer science course designs
             are more or less inviting to women depending on their design. Additionally, I&apos;d love to see how class factors 
             into these themes, especially when many of the best consumer applications (i.e., those that deliver the most freedoms)
              are locked behind recurring, expensive subscriptions.
            </div>
        
          </div>
          <div className="text-container">
            <p className="section-label">WEEK 15</p>
            <p className="section-title">Boris Groys: Art on the Internet</p>
            <div className="section-body">
            In this reading, Groys writes about how the internet has rapidly changed the framing of art from 
            fictional to non-fictional. This discussion was particularly compelling to me and elucidates why exactly
             &ldquo;content entertainment&rdquo; - whether long-form on YouTube or short-form on Instagram Reels and TikTok - 
             feels so distinct from &ldquo;art entertainment,&rdquo; such as movies and TV shows. It also provides a compelling 
             answer to the &ldquo;is (insert media form here) art?&rdquo; debate that has plagued both the television and video 
             game landscape. It&apos;s easy to see how Christopher Nolan&apos;s Oppenheimer is a work of art, but what about 
             Too Hot to Handle? I claim that the framing of the work (as in, is the context fictional or non-fictional)
              is deeply tied to whether we view a work as an artwork. The context of Oppenheimer is fictional - it&apos;s a 
              biographical drama - even though the plot is based on real events. Oppositely, Too Hot to Handle is framed
               as nonfiction, even though much of it is certainly scripted, thus why we view it not as art but more akin to a game show.
               <div className="section-body-break"/>

            This extends to the raging debate of whether video games are art. Games like The Last of Us, Hollow Knight, 
            and Super Mario Odyssey are all viewed as works of art, in drastically different ways - The Last of Us is as 
            much narrative film as it is game, Hollow Knight is akin to a moving painting or stained glass, and Odyssey 
            reminds the player of a children&apos;s book or cartoon. But are Overwatch and Pac-Man works of art? No, because 
            their main emphasis is on the real world instead of the fantastical - the main &ldquo;gameplay loop&rdquo; of Overwatch, 
            despite taking place in a fantastical version of our world, constantly references our usernames, ranks us
             (the players) in tiers, and places emphasis on real-world purchases and cosmetics that are fictional even 
             within the game&apos;s fictional world. Likewise, in Pac-Man, we are constantly reminded of the non-fictional 
             elements through our high scores, and through the constant insertion of quarters. 
             <div className="section-body-break"/>

            To sum it up - the more &ldquo;meta&rdquo; a work is, the less we view it as art, and more as a game or as content. 
            The more invisible the seams of the real world are, the more artistic we view a work. That&apos;s why I have doubts 
            that short-form video is the next big artistic medium - how can we lose ourselves in a work overlayed with buttons
             to like, comment, and follow? No matter how self-contained a TikTok or YouTube video is, the interface breaks 
             our immersion, and a thousand silly or cynical comments are merely seconds away from reminding us that the work
              cannot truly take us to another world.
              <div className="section-body-break"/>

            

            Questions:
            <div className="section-body-break"/>
            1. What do you think? Will short-form content really escape the designation of &ldquo;content&rdquo; and become art?
            <div className="section-body-break"/>

            2. How do your own perceptions of &ldquo;art&rdquo; vs &ldquo;not art&rdquo; follow or break this definition?


            </div>
        
          </div>
        </div>

        
      </div>
    </div>
  );
}