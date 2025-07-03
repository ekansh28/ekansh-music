export default function Home() {
  return (
    <div className="container">
      <header>
        <img
          className="artist-img"
          src="https://pbs.twimg.com/profile_images/1803868660576006144/bf0UBerb_400x400.jpg"
          alt="ekansh"
        />
        <h1>ekansh</h1>
        <p className="bio">
          Ekansh is an experimental electronic ambient music project by Ekansh Sharma, active since 2023. Known for ambient textures and nostalgic electronic soundscapes.
        </p>
      </header>

      <section className="album-grid">

        {/* Nightmare */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a2461942112_16.jpg" alt="Nightmare" />
            <span>Nightmare (2024)</span>
          </div>
          <ul>
            <li>Waiting Room</li>
            <li>Void</li>
            <li>Reincarnation</li>
            <li>Flashbacks</li>
          </ul>
        </div>

        {/* Echoes Of The Past */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a3438415720_16.jpg" alt="Echoes of the Past" />
            <span>Echoes Of The Past (2024)</span>
          </div>
          <ul>
            <li>Butterflies</li>
            <li>It Does Not Exist Anymore</li>
            <li>Polished Checkered Floor</li>
            <li>There Is No Going Back</li>
          </ul>
        </div>

        {/* Backrooms */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a3171557957_16.jpg" alt="Backrooms" />
            <span>Backrooms (2024)</span>
          </div>
          <ul>
            <li>Since 1992</li>
            <li>Thalassophobia</li>
            <li>Abandoned Theme Park</li>
            <li>Below the Ocean Floor</li>
            <li>A Burning Memory</li>
          </ul>
        </div>

        {/* Silent Hill */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a2764229203_16.jpg" alt="Silent Hill" />
            <span>Silent Hill (2024)</span>
          </div>
          <ul>
            <li>Lucid Dream</li>
            <li>Awakening Drug</li>
            <li>Level 108</li>
            <li>Hell</li>
            <li>It Was in the Past</li>
            <li>Dextromethorphan</li>
            <li>Nightmare</li>
          </ul>
        </div>

        {/* Desolate */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a2130310443_16.jpg" alt="Desolate" />
            <span>Desolate (2024)</span>
          </div>
          <ul>
            <li>Desolate</li>
            <li>Trapped Inside</li>
            <li>About to Drown</li>
            <li>Circus Nightmare</li>
            <li>Fading Away</li>
            <li>101 MHz</li>
            <li>About to Drown (2015)</li>
          </ul>
        </div>

        {/* Drowsy Pt. 1 */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a3995413192_16.jpg" alt="Drowsy Pt. 1" />
            <span>Drowsy Pt. 1 (2024)</span>
          </div>
          <ul>
            <li>Ground Zero</li>
            <li>Opiods</li>
            <li>Persian Night</li>
            <li>Rubber Room</li>
          </ul>
        </div>

        {/* Drowsy Pt. 2 */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a3995413192_16.jpg" alt="Drowsy Pt. 2" />
            <span>Drowsy Pt. 2 (2024)</span>
          </div>
          <ul>
            <li>She Was in My Dream Last Night</li>
            <li>Slowly Fading Away</li>
            <li>This Is It</li>
            <li>Time Pt. 2</li>
          </ul>
        </div>

        {/* Dark Is The Night */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a1590318634_16.jpg" alt="Dark Is The Night" />
            <span>Dark Is The Night (2025)</span>
          </div>
          <ul>
            <li>Dark Is The Night</li>
            <li>Second Plateau</li>
          </ul>
        </div>

        {/* Blood Moon */}
        <div className="album">
          <div className="album-header">
            <img src="https://f4.bcbits.com/img/a1443560232_16.jpg" alt="Blood Moon" />
            <span>Blood Moon (2025)</span>
          </div>
          <ul>
            <li>Transitions</li>
            <li>Gravity</li>
            <li>The Light</li>
            <li>Empty Ballroom</li>
            <li>Gothic Night</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
