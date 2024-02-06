export const CLOUDINARY_ASSET = "https://res.cloudinary.com/vrto/image/upload/";
export const CLOUDINARY_ASSET_URL = CLOUDINARY_ASSET + "t_ov/personal-web";

export const PORTFOLIO_ITEMS = [
    {
        id: '01-faradetva',
        order: 15,
        title: "Web na mieru pre Farnosť Detva",
        link: 'https://faradetva.sk',
        github: 'https://github.com/OndrejVrto/faradetva.sk',
        description: 'Pre Farnosť Detva spravujem webovú stránku viac ako 12 rokov. Za ten čas som vytvoril na mieru 3 rôzne verzie. Táto je najkomplexnejšia. Obsahuje veľa funkcionalít. Má pomerne slušne vyladené SEO a hlavne veľa jedinečného obsahu.',
        tags: ['web'],
        thumbnail: { src: "/portfolio/Thumbmails/01-faradetva.jpg", title: "Náhľad projektu: Web na mieru pre Farnosť Detva" },
        gallery: [
            { src: "/portfolio/01-faradetva/1-home-page.jpg", title: "Domovská stránka" },
            { src: "/portfolio/01-faradetva/2-oznamy.png", title: "Stránka s farskými oznamami" },
            { src: "/portfolio/01-faradetva/3-article-all.png", title: "Všetky články" },
            { src: "/portfolio/01-faradetva/4-article-one.jpg", title: "Jeden článok" },
            { src: "/portfolio/01-faradetva/6-page-kalvaria.png", title: "Jedna z mnohých statických stránok" },
            { src: "/portfolio/01-faradetva/7-submenu-sviatosti.jpg", title: "Podmenu stránka" },
            { src: "/portfolio/01-faradetva/8-statistics-page.png", title: "Stránka s grafmi" },
            { src: "/portfolio/01-faradetva/9-project-description.png", title: "Čo aplikácia dokáže" },
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
        description: 'CMS na mieru. Vďaka tomuto projektu, som sa naučil Laravel. Obsahuje veľké množstvo rôznej funkcionality. Napr.: Perfektnú správu obrázkov so zadávaním licencií z ktorých sa následne generuje komplexný Schema markup JSON. A keďže som sa učil, tak obsahuje aj kopu začiatočníckych chýb, ktoré postupne refaktorujem.',
        tags: ['admin', 'cms'],
        thumbnail: { src: "/portfolio/Thumbmails/02-faradetva-admin.jpg", title: "Náhľad projektu: Custom CMS pre web Farnosti Detva" },
        gallery: [
            { src: "/portfolio/02-faradetva-admin/1-dashboard.jpg", title: "Dahboard pre super-admina" },
            { src: "/portfolio/02-faradetva-admin/2-sample-data-grid.jpg", title: "Vzor data grigu" },
            { src: "/portfolio/02-faradetva-admin/3-formular-new-article.jpg", title: "Formulár na editáciu článku" },
            { src: "/portfolio/02-faradetva-admin/4-meta-data-for-page.png", title: "Meta dáta statickej stránky" },
            { src: "/portfolio/02-faradetva-admin/5-inpersonalization.png", title: "Inpesonalizácia administráítora do role uživateľa" },
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
        description: 'Chcete generovať jednoduché grafy bez čísel a zbytočných detailov? Tu je moje riešenie napísané v php. Výslekom je optimalizovaný SVG obrázok.',
        tags: ['package'],
        thumbnail: { src: "/portfolio/Thumbmails/03-php-linechart.jpg", title: "Náhľad projektu: PHP balíček na kreslenie SVG grafov" },
        gallery: [
            { src: "/portfolio/03-php-linechart/1-php-linechart.png", title: "Logo balíčka" },
            { src: "/portfolio/03-php-linechart/2-usage-code.png", title: "Vzor použitia a výsledok" },
            { src: "/portfolio/03-php-linechart/3-customization.png", title: "Možnosti prispôsobenia grafu" },
            { src: "/portfolio/03-php-linechart/4-gradient-example.png", title: "Nastavenie farieb grafu" },
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
        thumbnail: { src: "/portfolio/Thumbmails/04-cennik-blueera.jpg", title: "Náhľad projektu: Dynamický cenník Blueera" },
        gallery: [
            { src: "/portfolio/04-cennik-blueera/1-otazka.png", title: "Prvá otázka" },
            { src: "/portfolio/04-cennik-blueera/2-otazka.png", title: "Ďalšia otázka" },
            { src: "/portfolio/04-cennik-blueera/3-vysledok.png", title: "Súhrn nakoniec" },
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
        description: 'Administrácia konfigurátora cenníka. Pekný vzhľad obaľuje unikátnu a komplexnú logiku. V aplikácii je totiž možné dynamicky meniť vzťahy medzi odpoveďami, prípadne zobrazovať dodatočné otázky na základe predchádzajúcich odpovedí. Pod-otázky môžu byť vnorené v niekoľkých úrovniach. Táto logika je ukladaná v MySQL v rozšírených pivot tabuľkách.',
        tags: ['configurator', 'admin'],
        thumbnail: { src: "/portfolio/Thumbmails/05-cennik-blueera-admin.jpg", title: "Náhľad projektu: Administrácia cenníka" },
        gallery: [
            { src: "/portfolio/05-cennik-blueera-admin/1-login.png", title: "Prihlasovanie okno do administrácie" },
            { src: "/portfolio/05-cennik-blueera-admin/2-dashboard.png", title: "Dashboard aplikácie so súhrnom aktuálneho stavu" },
            { src: "/portfolio/05-cennik-blueera-admin/3-questions.png", title: "Zoznam otázok" },
            { src: "/portfolio/05-cennik-blueera-admin/4-new-question.png", title: "Formulár na pridanie novej otázky" },
            { src: "/portfolio/05-cennik-blueera-admin/5-answers.png", title: "Zoznam možných odpovedí" },
            { src: "/portfolio/05-cennik-blueera-admin/6-new-answer.png", title: "Formulár na pridanie novaj odpovede" },
            { src: "/portfolio/05-cennik-blueera-admin/7-relationships.png", title: "Formulár na určenie vzťahov medzi odpoveďou ainými otázkami" },
            { src: "/portfolio/05-cennik-blueera-admin/8-custom-template.png", title: "Uvítania a poďakovanie je možné tiež prispôsobiť" },
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
        description: 'Tento nástroj umožňuje základné sledovanie aktivity užívateľa bez použitia cookies alebo súhlasu podľa európskych smerníc GDPR. Celkové štatistiky, ktorých generovanie trvá dlho, sa vytvárajú pomocou Queue a preto je zobrazovanie výsledkov aj pri veľkých objemoch dát rýchle.',
        tags: ['package'],
        thumbnail: { src: "/portfolio/Thumbmails/06-laravel-visitors.jpg", title: "Náhľad projektu: Balíček Laravel na sumarizáciu návštevnosti stránok" },
        gallery: [
            { src: "/portfolio/06-laravel-visitors/1-laravel-visitors.png", title: "Logo balíčka" },
            { src: "/portfolio/06-laravel-visitors/2-usage-code.png", title: "Vzor použitia v kóde" },
            { src: "/portfolio/06-laravel-visitors/3-view-trafic-data.png", title: "Načítanie výsledných štatistík z databázy" },
            { src: "/portfolio/06-laravel-visitors/4-real-database-data.png", title: "Raálne dáta návštevnosti z produkcie" },
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
        thumbnail: { src: "/portfolio/Thumbmails/07-saunus-konfigurator.jpg", title: "Náhľad projektu: Konfigurátor kadí" },
        gallery: [
            { src: "/portfolio/07-saunus-konfigurator/1-saunus-homepage.png", title: "Domovská stránka" },
            { src: "/portfolio/07-saunus-konfigurator/2-konfigurable-item.png", title: "Produkt ktorý je možné konfigurovať" },
            { src: "/portfolio/07-saunus-konfigurator/3-toggle.png", title: "Prepínač jednej možnosti" },
            { src: "/portfolio/07-saunus-konfigurator/4-multi-select.png", title: "Multivýber viacerých možností" },
            { src: "/portfolio/07-saunus-konfigurator/5-colors.png", title: "Výber farby povrchu" },
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
        thumbnail: { src: "/portfolio/Thumbmails/08-konfigurator-lunit.jpg", title: "Náhľad projektu: Konfigurátor kuchynských dvierok" },
        gallery: [
            { src: "/portfolio/08-konfigurator-lunit/1-step.png", title: "Výber produktu" },
            { src: "/portfolio/08-konfigurator-lunit/2-full-formular-for-doors.png", title: "Komplexný formulár dvierok" },
            { src: "/portfolio/08-konfigurator-lunit/3-tablet-layout.png", title: "Medzikrok výberu typu dvierok responzívne na tablete" },
            { src: "/portfolio/08-konfigurator-lunit/4-menu-in-mobil-portrait.png", title: "Sumár zvolených položiek v zobrazení na mobile" },
            { src: "/portfolio/08-konfigurator-lunit/5-menu-in-mobil-landscape.png", title: "Sumár zvolených položiek v mobile na ležato" },
            { src: "/portfolio/08-konfigurator-lunit/6-multilanguage.png", title: "Zjednodušený formulár pre rýchlu objednávku" },
            { src: "/portfolio/08-konfigurator-lunit/7-dark-mode.png", title: "Dark mód v procese vývoja" },
            { src: "/portfolio/08-konfigurator-lunit/8-modals-confidences.png", title: "Modálne okná" },
            { src: "/portfolio/08-konfigurator-lunit/9-color-sorting.png", title: "Zoradenie farieb do menších skupín podľa chromatickosti" },
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
        thumbnail: { src: "/portfolio/Thumbmails/09-ms-automation.jpg", title: "Náhľad projektu: Vytvorenie webu podľa dodaného dizajnu" },
        gallery: [
            { src: "/portfolio/09-ms-automation/1-ms-automation-home-page.png", title: "Kompletná domovská stránka" },
            { src: "/portfolio/09-ms-automation/2-proces-detail.png", title: "Detail na sekciu s pribehom procesov" },
            { src: "/portfolio/09-ms-automation/3-acf-formular.png", title: "Formulár ACF pre zadávanie obsahu stránky" },
            { src: "/portfolio/09-ms-automation/4-custom-thema.png", title: "Custom téma na mieru" },
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
        thumbnail: { src: "/portfolio/Thumbmails/10-php-filename-sanitize.jpg", title: "Náhľad projektu: PHP balíček na správu názvov súborov" },
        gallery: [
            { src: "/portfolio/10-php-filename-sanitize/1-php-filename-sanitize.png", title: "Logo balíčka" },
            { src: "/portfolio/10-php-filename-sanitize/2-code-usage.png", title: "Základné použitie balíčka" },
            { src: "/portfolio/10-php-filename-sanitize/3-simple-examples.png", title: "Príklady" },
            { src: "/portfolio/10-php-filename-sanitize/4-custom-features.png", title: "Dodatočná funkcionalita" },
        ],
        technologies: [
            { title: "Php", image: "php.svg" },
        ],
    },
];
