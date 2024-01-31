const PORTFOLIO_ITEMS = [
    {
        id: '01-faradetva',
        order: 15,
        title: "Web na mieru pre Farnosť Detva",
        link: 'https://faradetva.sk',
        github: 'https://github.com/OndrejVrto/faradetva.sk',
        description: 'Pre Farnosť Detva spravujem webové stránku viac ako 12 rokov. Za ten čas som vytvoril 3 rôzne verzie. Táto je najkomplexnejšia. Obsahuje veľa funkcionalít. Učil som sa na nej Laravel. Má slušne vyladené SEO.',
        tags: ['web'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/01-faradetva.jpg", alt: "Náhľad projektu: Web na mieru pre Farnosť Detva" },
        gallery: [
            { src: "./assets/images/portfolio/01-faradetva/1-home-page.jpg", alt: "Domovská stránka" },
            { src: "./assets/images/portfolio/01-faradetva/2-oznamy.png", alt: "Stránka s farskými oznamami" },
            { src: "./assets/images/portfolio/01-faradetva/3-article-all.png", alt: "Všetky články" },
            { src: "./assets/images/portfolio/01-faradetva/4-article-one.jpg", alt: "Jeden článok" },
            { src: "./assets/images/portfolio/01-faradetva/6-page-kalvaria.png", alt: "Jedna z mnohých statických stránok" },
            { src: "./assets/images/portfolio/01-faradetva/7-submenu-sviatosti.jpg", alt: "Podmenu stránka" },
            { src: "./assets/images/portfolio/01-faradetva/8-statistics-page.png", alt: "Stránka s grafmi" },
            { src: "./assets/images/portfolio/01-faradetva/9-project-description.png", alt: "Čo aplikácia dokáže" },
        ],
        technologies: [
            { title: "Laravel", image: "laravel.svg" },
            { title: "Bootstrap", image: "bootstrap.svg" },
            { title: "Livewire", image: "liweware.svg" },
        ],
    },


    {
        id: '02-faradetva-admin',
        order: 20,
        title: "Custom CMS pre web Farnosti Detva",
        link: null,
        github: 'https://github.com/OndrejVrto/faradetva.sk',
        description: 'CMS pre na mieru. Vďaka tomuto projektu, som sa naučil Laravel. Obsahuje veľké množstvo rôznej funkcionality. Napr.: Perfektnú správu obrázkov so zadávaním zdrojov.',
        tags: ['admin', 'cms'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/02-faradetva-admin.jpg", alt: "Náhľad projektu: Custom CMS pre web Farnosti Detva" },
        gallery: [
            { src: "./assets/images/portfolio/02-faradetva-admin/1-dashboard.jpg", alt: "Dahboard pre super-admina" },
            { src: "./assets/images/portfolio/02-faradetva-admin/2-sample-data-grid.jpg", alt: "Vzor data grigu" },
            { src: "./assets/images/portfolio/02-faradetva-admin/3-formular-new-article.jpg", alt: "Formulár na editáciu článku" },
            { src: "./assets/images/portfolio/02-faradetva-admin/4-meta-data-for-page.png", alt: "Meta dáta statickej stránky" },
            { src: "./assets/images/portfolio/02-faradetva-admin/5-inpersonalization.png", alt: "Inpesonalizácia administráítora do role uživateľa" },
        ],
        technologies: [
            { title: "Laravel", image: "laravel.svg" },
            { title: "Bootstrap", image: "bootstrap.svg" },
        ],
    },


    {
        id: '03-php-linechart',
        order: 45,
        title: "PHP balíček na kreslenie SVG grafov",
        link: null,
        github: 'https://github.com/OndrejVrto/php-linechart',
        description: 'Chcete generovať jednoduché grafy podobné bez čísel a zbytočných detailov? Tu je moje riešenie napísané v php. Výslekom je optimalizovaný SVG obrázok.',
        tags: ['package'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/03-php-linechart.jpg", alt: "Náhľad projektu: PHP balíček na kreslenie SVG grafov" },
        gallery: [
            { src: "./assets/images/portfolio/03-php-linechart/1-php-linechart.png", alt: "Logo balíčka" },
            { src: "./assets/images/portfolio/03-php-linechart/2-usage-code.png", alt: "Vzor použitia a výsledok" },
            { src: "./assets/images/portfolio/03-php-linechart/3-customization.png", alt: "Možnosti prispôsobenia grafu" },
            { src: "./assets/images/portfolio/03-php-linechart/4-gradient-example.png", alt: "Nastavenie farieb grafu" },
        ],
        technologies: [
            { title: "Php", image: "php.svg" },
        ],
    },


    {
        id: '04-cennik-blueera',
        order: 30,
        title: "Dynamický cenník",
        link: 'https://cennik.blueera.sk/ppc-reklama',
        github: null,
        description: 'Konfigurátor služieb postavený na otázkach a odpovediach, pričom odpoveď ovplyvňuje nasledovné otázky. Kombinácia odpovedí ovplyvňuje výslednú cenu ako aj vzhľad posledného kroku. Stránka je plne responzívna a rýchla. Obsah je plne manežovateľný cez administráciu.',
        tags: ['web'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/04-cennik-blueera.jpg", alt: "Náhľad projektu: Dynamický cenník Blueera" },
        gallery: [
            { src: "./assets/images/portfolio/04-cennik-blueera/1-otazka.png", alt: "Prvá otázka" },
            { src: "./assets/images/portfolio/04-cennik-blueera/2-otazka.png", alt: "Ďalšia otázka" },
            { src: "./assets/images/portfolio/04-cennik-blueera/3-vysledok.png", alt: "Súhrn nakoniec" },
        ],
        technologies: [
            { title: "Laravel", image: "laravel.svg" },
            { title: "Bootstrap", image: "bootstrap.svg" },
            { title: "JQuery", image: "jquery2.svg" },
        ],
    },



    {
        id: '05-cennik-blueera-admin',
        order: 35,
        title: "Administrácia cenníka",
        link: 'https://cennik.blueera.sk/admin',
        github: null,
        description: 'Administrácia konfigurátora cenníka. Pekný vzhľad obaľuje unikátnu a komplexnú logiku. V aplikácii je totiž možné dynamicky meniť vzťahy medzi otázkami, prípadne medzi odpoveďami a následnými otázkami.',
        tags: ['configurator', 'admin'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/05-cennik-blueera-admin.jpg", alt: "Náhľad projektu: Administrácia cenníka" },
        gallery: [
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/1-login.png", alt: "Prihlasovanie okno do administrácie" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/2-dashboard.png", alt: "Dashboard aplikácie so súhrnom aktuálneho stavu" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/3-questions.png", alt: "Zoznam otázok" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/4-new-question.png", alt: "Formulár na pridanie novej otázky" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/5-answers.png", alt: "Zoznam možných odpovedí" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/6-new-answer.png", alt: "Formulár na pridanie novaj odpovede" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/7-relationships.png", alt: "Formulár na určenie vzťahov medzi odpoveďou ainými otázkami" },
            { src: "./assets/images/portfolio/05-cennik-blueera-admin/8-custom-template.png", alt: "Uvítania a poďakovanie je možné tiež prispôsobiť" },
        ],
        technologies: [
            { title: "Laravel", image: "laravel.svg" },
            { title: "Laravel Orchid", image: "laravel-orchid.svg" },
        ],
    },


    {
        id: '06-laravel-visitors',
        order: 50,
        title: "Balíček Laravel na sumarizáciu návštevnosti stránok",
        link: null,
        github: 'https://github.com/OndrejVrto/laravel-visitors',
        description: 'Tento nástroj umožňuje základné sledovanie aktivity užívateľa bez použitia cookies alebo súhlasu podľa európskych smerníc GDPR. Celkové štatistiky, ktorých generovanie trvá dlho, vytvára na pozadí, a preto je zobrazovanie výsledkov aj pri veľkých objemoch dát rýchle.',
        tags: ['package'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/06-laravel-visitors.jpg", alt: "Náhľad projektu: Balíček Laravel na sumarizáciu návštevnosti stránok" },
        gallery: [
            { src: "./assets/images/portfolio/06-laravel-visitors/1-laravel-visitors.png", alt: "Logo balíčka" },
            { src: "./assets/images/portfolio/06-laravel-visitors/2-usage-code.png", alt: "Vzor použitia v kóde" },
            { src: "./assets/images/portfolio/06-laravel-visitors/3-view-trafic-data.png", alt: "Načítanie výsledných štatistík z databázy" },
            { src: "./assets/images/portfolio/06-laravel-visitors/4-real-database-data.png", alt: "Raálne dáta návštevnosti z produkcie" },
        ],
        technologies: [
            { title: "Php", image: "php.svg" },
            { title: "Laravel", image: "laravel.svg" },
        ],
    },


    {
        id: '07-saunus-konfigurator',
        order: 10,
        title: "Konfigurátor kadí",
        link: "https://saunus.sk/produkt/kupacia-kada-vonkajsia-piecka/",
        github: null,
        description: 'Podľa dodaného designu som vytvoril niektoré sekcie na hlavnej stránke. V ACF som vytvoril konfigurátor. Je ho možné povoliť a vyplniť unikátnymi dátami pri každom produkte. Cena je rátaná dynamicky pomocou JaveScriptu. Formátovanie ceny je napojené na API WordPressu.',
        tags: ['web', 'configurator'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/07-saunus-konfigurator.jpg", alt: "Náhľad projektu: Konfigurátor kadí" },
        gallery: [
            { src: "./assets/images/portfolio/07-saunus-konfigurator/1-saunus-homepage.png", alt: "Domovská stránka" },
            { src: "./assets/images/portfolio/07-saunus-konfigurator/2-konfigurable-item.png", alt: "Produkt ktorý je možné konfigurovať" },
            { src: "./assets/images/portfolio/07-saunus-konfigurator/3-toggle.png", alt: "Prepínač jednej možnosti" },
            { src: "./assets/images/portfolio/07-saunus-konfigurator/4-multi-select.png", alt: "Multivýber viacerých možností" },
            { src: "./assets/images/portfolio/07-saunus-konfigurator/5-colors.png", alt: "Výber farby povrchu" },
        ],
        technologies: [
            { title: "WordPress", image: "wordpress.svg" },
            { title: "Php", image: "php.svg" },
            { title: "Sass", image: "sass.svg" },
            { title: "JQuery", image: "jquery2.svg" },
        ],
    },


    {
        id: '08-konfigurator-lunit',
        order: 5,
        title: "Konfigurátor kuchynských dvierok",
        link: 'https://konfigurator.blueera.app',
        github: null,
        description: 'Rozsiahla webová aplikácia a konfigurátor pre stolárov. Riešil som celý projekt. Analyzoval a spracoval som podklady od zákazníka. Návrhol štruktúru DB. Programoval som BE, FE aj automatický export dát z Excelu. Kreslil som SVG obrázky na mieru projektu. Aplikácie je plne responzívna. Pamätá si stav rozpracovanosti a dokáže pracovať off-line. Je plne integrovaná s e-shopom zákazníka, pričom dokáže spätne spracovávať už archivované objednávky.',
        tags: ['web', 'configurator'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/08-konfigurator-lunit.jpg", alt: "Náhľad projektu: Konfigurátor kuchynských dvierok" },
        gallery: [
            { src: "./assets/images/portfolio/08-konfigurator-lunit/1-step.png", alt: "Výber produktu" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/2-full-formular-for-doors.png", alt: "Komplexný formulár dvierok" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/3-tablet-layout.png", alt: "Medzikrok výberu typu dvierok responzívne na tablete" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/4-menu-in-mobil-portrait.png", alt: "Sumár zvolených položiek v zobrazení na mobile" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/5-menu-in-mobil-landscape.png", alt: "Sumár zvolených položiek v mobile na ležato" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/6-multilanguage.png", alt: "Zjednodušený formulár pre rýchlu objednávku" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/7-dark-mode.png", alt: "Dark mód v procese vývoja" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/8-modals-confidences.png", alt: "Modálne okná" },
            { src: "./assets/images/portfolio/08-konfigurator-lunit/9-color-sorting.png", alt: "Zoradenie farieb do menších skupín podľa chromatickosti" },
        ],
        technologies: [
            { title: "Laravel", image: "laravel.svg" },
            { title: "TypeScript", image: "typescript.svg" },
            { title: "Sass", image: "sass.svg" },
            { title: "VBA", image: "vba.svg" },
            { title: "JQuery", image: "jquery2.svg" },
        ],
    },


    {
        id: '09-ms-automation',
        order: 40,
        title: "Vytvorenie webu podľa dodaného dizajnu",
        link: "https://msautomation.blueera.sk/",
        github: null,
        description: 'Podľa dodaného designu som vytvoril Wordpress tému na mieru pre zákazníka. Obsah stránky je možné meniť pomocou ACF formulárov. Stránka je plne responzívna.',
        tags: ['web'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/09-ms-automation.jpg", alt: "Náhľad projektu: Vytvorenie webu podľa dodaného dizajnu" },
        gallery: [
            { src: "./assets/images/portfolio/09-ms-automation/1-ms-automation-home-page.png", alt: "kompletná domovská stránka" },
            { src: "./assets/images/portfolio/09-ms-automation/2-proces-detial.png", alt: "Detail na sekciu s pribehom procesov" },
            { src: "./assets/images/portfolio/09-ms-automation/3-acf-formular.png", alt: "Formulár ACF pre zadávanie obsahu stránky" },
            { src: "./assets/images/portfolio/09-ms-automation/4-custom-thema.png", alt: "Custom téma na mieru" },
        ],
        technologies: [
            { title: "WordPress", image: "wordpress.svg" },
            { title: "Php", image: "php.svg" },
            { title: "JQuery", image: "jquery2.svg" },
            { title: "Sass", image: "sass.svg" },
        ],
    },


    {
        id: '10-php-filename-sanitize',
        order: 25,
        title: "PHP balíček na správu názvov súborov",
        link: null,
        github: 'https://github.com/OndrejVrto/php-filename-sanitize',
        description: 'Ak nechcete stratiť pôvodný názov súboru a chcete sa vyhnúť nezmyselným náhodne generovaným menám, tento balík vám pomôže vyriešiť Váš problém.',
        tags: ['package'],
        thumbnail: { src: "./assets/images/portfolio/Thumbmails/10-php-filename-sanitize.jpg", alt: "Náhľad projektu: PHP balíček na správu názvov súborov" },
        gallery: [
            { src: "./assets/images/portfolio/10-php-filename-sanitize/1-php-filename-sanitize.png", alt: "Logo balíčka" },
            { src: "./assets/images/portfolio/10-php-filename-sanitize/2-code-usage.png", alt: "Základné použitie balíčka" },
            { src: "./assets/images/portfolio/10-php-filename-sanitize/3-simple-examples.png", alt: "Príklady" },
            { src: "./assets/images/portfolio/10-php-filename-sanitize/4-custom-features.png", alt: "Dodatočná funkcionalita" },
        ],
        technologies: [
            { title: "Php", image: "php.svg" },
        ],
    },
];

export default PORTFOLIO_ITEMS;
