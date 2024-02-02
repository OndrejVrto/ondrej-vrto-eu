function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="copyright">
                    <a href="#navbar" aria-label="Go to top of page">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="#ff6600"
                                d="m335 264-18-104h-56l27 170 47-66zm90-104-86 122-47 66h55l136-188h-58z"
                            />
                            <path
                                fill="#d1d5db"
                                d="M163 303a9 9 0 0 1-1 0H91c-2 0-4-1-3-3l25-91a5 5 0 0 1 5-3h72c2 0 3 1 2 3l-22 80h54l24-86c3-12 1-23-5-31s-16-12-29-12H112a49 52 0 0 0-33 12 58 61 0 0 0-19 31L32 306q-6 18 4 30c7 8 17 12 29 12h103a49 52 0 0 0 33-12 61 64 0 0 0 19-31l1-2z"
                            />
                        </svg>
                    </a>
                    <p>Copyright &copy; 2023-{new Date().getFullYear()}</p>
                </div>
                <p>
                    Created by <span className="author">Ondrej Vrťo</span>
                </p>
            </div>

            <a
                className="github-corner"
                href="https://github.com/OndrejVrto/ondrej-vrto-eu"
                aria-label="View phis page source on GitHub"
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 250 250"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m0 0 115 115h15l12 27 108 108V0Z" />
                    <path
                        className="octo-arm"
                        fill="currentcolor"
                        d="M128 109c-14-9-9-19-9-19 3-7 2-11 2-11-2-7 2-3 2-3 4 5 3 11 3 11-3 11 5 15 8 16"
                    />
                    <path
                        className="octo-body"
                        fill="currentcolor"
                        d="M115 115s4 2 5 0l14-13c3-3 6-4 8-3-8-11-14-25 2-41 5-5 10-7 16-7 0-2 3-7 11-11 0 0 5 3 8 16a59 59 0 0 1 21 22c14 2 16 7 16 7-3 8-9 11-11 12 0 5-2 11-7 16-16 16-30 10-40 1 0 3-1 7-5 11l-12 12c-1 1 1 5 1 5Z"
                    />
                </svg>
            </a>
        </footer>
    );
}

export default Footer;
