function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="copyright">
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
                    <p>Copyright &copy; 2023-{new Date().getFullYear()}</p>
                </div>
                <p>
                    Created by <span className="author">Ondrej Vrťo</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
