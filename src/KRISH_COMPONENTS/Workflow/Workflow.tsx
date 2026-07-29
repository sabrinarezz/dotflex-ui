"use client";

import "./Workflow.css";

interface WorkflowStep {
    number: string;
    title: string;
    description: string;
}

const workflow: WorkflowStep[] = [
    {
        number: "01",
        title: "Name Generation",
        description:
            "AI-driven name generation streamlines branding with curated,domain-checked options tailored to your business."
    },
    {
        number: "02",
        title: "Logo Creation",
        description:
            "Instant SVG logo generation provides three design variants, delivering a production-ready look in seconds."
    },
    {
        number: "03",
        title: "Card Design",
        description:
            "Effortlessly create professional business cards ready for both digital and print distribution."
    },
    {
        number: "04",
        title: "UI Launchpad",
        description:
            "Generate a starter UI component kit and landing page wireframe from Tailwind CSS and Figma."
    }
];

const Workflow = () => {
    return (
        <section className="workflow">

            <div className="workflow__container">

                <div className="workflow__header">

                    <span className="workflow__badge">
                        THE PLATFORM
                    </span>

                    <h2>
                        Four Instruments.
                        <br />
                        One Seamless Workflow.
                    </h2>

                    <p>
                        From brand name to logo, business card, and UI export -- every tool is designed for speed.
                    </p>

                </div>

                <div className="workflow__timeline">

                    {workflow.map((step, index) => (
                        <div
                            key={step.number}
                            className="workflow__item"
                        >

                            <div className="workflow__circle">
                                {step.number}
                            </div>

                            {index !== workflow.length - 1 && (
                                <div className="workflow__line" />
                            )}

                            <div className="workflow__card">

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Workflow;