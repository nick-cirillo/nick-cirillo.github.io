import "./music-shelf.css";
import Image from "next/image";

export default function Page() {
    return (
      <div>
        <div className="shelf-container">
            <div className="shelf-text-container">
                <p>this is the music shelf</p>
            </div>
            <div className="shelf-image-container">
                <a id="the_wall" href="./music-shelf/hey-you"><img src="album-cover-snippets/the_wall.png" alt="a plain white brick wall with bricks missing on the diagonal axis" /></a>
                <a id="hellfire" href="./music-shelf/hellfire"><img src="album-cover-snippets/hellfire.png" alt="a splattered pink jumble of bizarre figures and abstract imagery" /></a>
                <a id="hellfire_cutout" href="./music-shelf/hellfire"><img src="album-cover-snippets/hellfire_cutout.png" alt="a splattered pink jumble of bizarre figures and abstract imagery" /></a>
                <a id="ants_from_up_there" href="./music-shelf/chaos-space-marine"><img src="album-cover-snippets/ants_from_up_there.png" alt="a Concorde jet hanging from a hook in a plastic bag" /></a>
                <a id="monomyth" href="./music-shelf/monomyth"><img src="album-cover-snippets/monomyth.png" alt="a statue of animal bones with the word 'MONOMYTH' partially obscured" /></a>
                <a id="out_of_time" href="./music-shelf/losing-my-religion"><img src="album-cover-snippets/out_of_time.png" alt="a yellow label reading 'R.E.M. OUT OF TIME'" /></a>
                <a id="toxicity" href="./music-shelf/chop-suey"><img src="album-cover-snippets/toxicity.png" alt="the words 'SYSTEM OF A DOWN' in a spoof of the Hollywood sign" /></a>
                <a id="in_rainbows" href="./music-shelf/jigsaw-falling-into-place"><img src="album-cover-snippets/in_rainbows.png" alt="a burst of molten lava" /></a>
                <a id="year_of_the_snitch" href="./music-shelf/the-fear"><img src="album-cover-snippets/year_of_the_snitch.png" alt="a mouth" /></a>
                <a id="the_new_sound" href="./music-shelf/holy-holy"><img src="album-cover-snippets/the_new_sound.png" alt="art of a woman cutting off a man's head while kissing him" /></a>
                <a id="cant_buy_a_thrill" href="./music-shelf/only-a-fool-would-say-that"><img src="album-cover-snippets/cant_buy_a_thrill.png" alt="a mouth with red lipstick and a colorful tendril emerging" /></a>
            </div>
        </div>
      </div>
    );
}