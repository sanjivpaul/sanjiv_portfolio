function FooterPage() {
  return (
    <>
      <div className="footer">
        <h2 className="contact-title">Contact me!</h2>
        <div className="contact-links">
          <span>
            <a className="links" href="mailto: paulsanjiv81@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/sanjivpaul">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </span>
          {/* <span>
            <a href="http://">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </span> */}
          <span><a href="https://twitter.com/sanjivpaul_9"><i class="fa-brands fa-square-twitter"></i></a></span>
        </div>
        <div className="licence">Made by sanjiv paul &copy; 2022</div>
      </div>
    </>
  );
}
export default FooterPage;
