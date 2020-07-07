export default function Hero() {
    return (
        <>
            <section className="fj-hero">
                <div className="fj-hero-wrapper row text-center">
                    <div className="col-md-12 px-0">
                        <div className="hero-image-container mx-auto">
                            <a className="grow hero-link">
                                <img
                                className="hero-image"
                                src="/crystel.png"></img>
                            </a>
                        </div>
                        <h1 className="white hero-title my-4">
                            <div className="tagline">
                                <span>Hi, I'm Crystel.</span>
                                <br />
                                <span>I'm a</span>
                                <div className="word glitch">
                                <div className="flash is-off">
                                    <span className="text"></span>
                                </div>
                                </div>
                                <span>Developer.</span>
                            </div>
                        </h1>
                        <h3 className="white hero-subtitle my-4">
                            I have been working as a developer for about 5 years. <br />
                            Worked for start-up and outsourcing companies.
                        </h3>
                    </div>
                    <div className="col-md-6 text-left float-left">
                        <h3 className="white hero-title my-4">
                            What I do...
                        </h3>
                        <div className="button-container my-4">
                            <div className="mx-1">
                                <a className="mr-5 d-inline-block text-center" href="">
                                    <i className="fa fa-code text-white" aria-hidden="true"></i>
                                    <br />
                                    <br />
                                    <span>
                                        Web
                                        <br />
                                        Development
                                    </span>
                                </a>
                                <a className="mx-5 d-inline-block text-center" href="">
                                    <i className="fa fa-desktop text-white" aria-hidden="true"></i>
                                    <br />
                                    <br />
                                    <span>
                                        Web
                                        <br />
                                        Design
                                    </span>
                                </a>
                                <a className="mx-5 d-inline-block text-center" href="">
                                    <i className="fa fa-mobile text-white" aria-hidden="true"></i>
                                    <br />
                                    <br />
                                    <span>
                                        Responsive
                                        <br />
                                        Design
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right float-right">
                        <h3 className="white hero-title my-4">
                            Follow me...
                        </h3>
                        <div className="button-container my-4">
                            <div className="mx-1">
                                <a href="https://www.linkedin.com/in/intel-gangoso-b51b1a136/" className="mx-5 text-center">
                                    <i className="fa fa-linkedin-square text-white" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/intelgangoso" className="mx-5 text-center">
                                    <i className="fa fa-github text-white" aria-hidden="true"></i>
                                </a>
                                <a href="https://jsfiddle.net/user/intelgee/fiddles/" className="ml-5 text-center">
                                    <i className="fa fa-jsfiddle text-white" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}