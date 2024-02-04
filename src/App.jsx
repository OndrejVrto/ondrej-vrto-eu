import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Biography from "./components/biography/Biography";
import Technologies from "./components/technologies/Technologies";

export const SECTIONS = [
    { id: "hero", title: "Domov", element: <Hero /> },
    { id: "technologies", title: "Technológie", element: <Technologies /> },
    { id: "portfolio", title: "Portfólio", element: <Portfolio /> },
    { id: "contact", title: "Kontakt", element: <Contact /> },
    { id: "biography", title: "Dokumenty", element: <Biography /> },
];

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />

            {SECTIONS.map((section) => (
                <section id={section.id} key={section.id}>
                    <h1 className="title">{section.title}</h1>
                    {section.element}
                </section>
            ))}

            <Footer />
        </>
    );
}

export default App;
