import "./album-art-collage.css";
import Link from 'next/link';

export default function Page() {
    return (
      <div>
        <div className="back-button-container">
          <a id="back-button" href="/web-art/about/album-art-collage" className="back-button">&#x2190;</a>
	      </div>
        <div className="shelf-container">
            <div className="shelf-text-container">
                <span id="shelf-text-title">this is my interactive album art collage</span>
                can you find and click all 10 tracks?
            </div>
            <div className="shelf-image-container">
                <Link id="the_wall" href="./album-art-collage/hey-you"><img src="/album-cover-snippets/the_wall.png" alt="a plain white brick wall with bricks missing on the diagonal axis" /></Link>
                <Link id="hellfire" href="./album-art-collage/hellfire"><img src="/album-cover-snippets/hellfire.png" alt="a splattered pink jumble of bizarre figures and abstract imagery" /></Link>
                <Link id="hellfire_cutout" href="./album-art-collage/hellfire"><img src="/album-cover-snippets/hellfire_cutout.png" alt="a splattered pink jumble of bizarre figures and abstract imagery" /></Link>
                <Link id="ants_from_up_there" href="./album-art-collage/chaos-space-marine"><img src="/album-cover-snippets/ants_from_up_there.png" alt="a Concorde jet hanging from a hook in a plastic bag" /></Link>
                <Link id="monomyth" href="./album-art-collage/monomyth"><img src="/album-cover-snippets/monomyth.png" alt="a statue of animal bones with the word 'MONOMYTH' partially obscured" /></Link>
                <Link id="out_of_time" href="./album-art-collage/losing-my-religion"><img src="/album-cover-snippets/out_of_time.png" alt="a yellow label reading 'R.E.M. OUT OF TIME'" /></Link>
                <Link id="toxicity" href="./album-art-collage/chop-suey"><img src="/album-cover-snippets/toxicity.png" alt="the words 'SYSTEM OF A DOWN' in a spoof of the Hollywood sign" /></Link>
                <Link id="in_rainbows" href="./album-art-collage/jigsaw-falling-into-place"><img src="/album-cover-snippets/in_rainbows.png" alt="a burst of molten lava" /></Link>
                <Link id="year_of_the_snitch" href="./album-art-collage/the-fear"><img src="/album-cover-snippets/year_of_the_snitch.png" alt="a mouth" /></Link>
                <Link id="the_new_sound" href="./album-art-collage/holy-holy"><img src="/album-cover-snippets/the_new_sound.png" alt="art of a woman cutting off a man's head while kissing him" /></Link>
                <Link id="cant_buy_a_thrill" href="./album-art-collage/only-a-fool-would-say-that"><img src="/album-cover-snippets/cant_buy_a_thrill.png" alt="a mouth with red lipstick and a colorful tendril emerging" /></Link>
            </div>
        </div>
        <div className="webring">
          <a id="left-webring" href="https://kenziem67.github.io/s1fp/index.html" style={{ position: 'fixed', bottom: '10px', left: '0', margin: '10px', width: '120px', height: '40px' }}><img src="/webring/kenzie.png" alt="a green arrow pointing to a red circle with the earth overlayed"/></a>
          <a id="right-webring" href="https://shruku1235.github.io/s1fp/" style={{ position: 'fixed', bottom: '0', right: '0', margin: '10px', width: '75px', height: '75px' }}><img src="/webring/shruthi.png" alt="a hand pointing right while holding a plastic cup of coffee"/></a>
          <span id="webring-text">&#x2190; why not check out <a href="https://www.design.upenn.edu/courses/dsgn-1020">our</a> webring? &#x2192;</span>
        </div>
      </div>
    );
}