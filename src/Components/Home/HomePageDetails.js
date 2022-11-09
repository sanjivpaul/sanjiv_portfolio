function HomePageDetails() {
  return (
    <>
      <div className="details-container">
        <div className="linux-cmd">
          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar">$ currentLocation</span>
            <p className="white-ans">ghatsila, jamshedpur</p>
          </section>

          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar">$ contactInfo</span>
            <div className="white-ans contactinfo-container">
              <a className="cmd-links" href="mailto: paulsanjiv81@gmail.com">
                "paulsanjiv81@gmail.com",
              </a>
              <a className="cmd-links" href="https://github.com/sanjivpaul">
                "github",
              </a>
              <a className="cmd-links" href="https://twitter.com/sanjivpaul_9/">
                "twitter"
              </a>
            </div>
          </section>

          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar">$ resume</span>
            <p className="white-ans">
              <span>
                <a className="cmd-links" href="https://drive.google.com/drive/u/0/folders/1sAGQYXu5GPnxyHuGwL7w-ZFlD7dA4Ohc">sanjivpaul-resume.pdf </a>
                {/* <iframe src="https://drive.google.com/drive/u/0/folders/1sAGQYXu5GPnxyHuGwL7w-ZFlD7dA4Ohc" style="width:718px; height:700px;" frameborder="0">sanjivpaul-resume.pdf</iframe> */}
                </span>
            </p>
          </section>

          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar">$ education</span>
            <p className="white-ans">
              <span>
                B.Sc. Chemistry Hons. Karim City College, Kolhan University
                Chaibasa, jharkhand
              </span>
            </p>
          </section>

          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar">$ skills</span>
            <p className="white-ans">
              <span>
                "JavaScript", "Python", "React JS", "Node JS", "Express JS",
                "MongoDB", "Git"
              </span>
            </p>
          </section>

          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar">$ interest</span>
            <p className="white-ans">
              <span>music, </span>
              <span>reading, </span>
              <span>travelling </span>
            </p>
          </section>

          <section className="intro-section">
            <span className="green-title">@sanjivpaul</span>
            <span className="white-colon">:</span>
            <span className="blue-sign">&#126; </span>
            <span className="white-dollar cmd-typing-demo">$ </span>
          </section>
        </div>
      </div>
    </>
  );
}
export default HomePageDetails;
