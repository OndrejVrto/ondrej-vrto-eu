import Technology from "./Technology";
import TECHNOLOGIES_LIST from "../../technologies-list";
const { primary, secondary, tertiary, graphics, education } = TECHNOLOGIES_LIST;

function Technologies() {
    return (
        <div className="wrapper">
            <div>
                <h2>Prioritne sa zameriavam na</h2>
                <ul className="primary technology">
                    {primary.map((primaryTechnology) => (
                        <Technology
                            key={primaryTechnology.title}
                            technology={primaryTechnology}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <h2>Ovládam aj</h2>
                <ul className="secondary technology">
                    {secondary.map((secondaryTechnology) => (
                        <Technology
                            key={secondaryTechnology.title}
                            technology={secondaryTechnology}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <h2>Využívam na to</h2>
                <ul className="tertiary technology">
                    {tertiary.map((tertiaryTechnology) => (
                        <Technology
                            key={tertiaryTechnology.title}
                            technology={tertiaryTechnology}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <h2>Kreslím pomocou</h2>
                <ul className="graphics technology">
                    {graphics.map((graphicsTechnology) => (
                        <Technology
                            key={graphicsTechnology.title}
                            technology={graphicsTechnology}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <h2>Vzdelávam sa cez</h2>
                <ul className="education technology">
                    {education.map((education) => (
                        <Technology
                            progressOff
                            key={education.title}
                            technology={education}
                        />
                    ))}
                </ul>
            </div>

            <p className="unknown-technology">
                Používaš technológiu ktorú nemám v zozname? <span>SUPER</span>,
                chcem sa ju doučiť!
            </p>
        </div>
    );
}

export default Technologies;
