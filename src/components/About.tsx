import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
    return (
        <div className="w-full h-full flex items-center justify-center z-0">
            <div className="w-4/5 h-full py-12  rounded-lg">
                <div className="py-12">
                    <h1 className="text-3xl font-bold mb-6">About</h1>
                    <p className="text-lg leading-relaxed mb-4">
                        This exemplary tool leverages Lean Manufacturing principles and cutting-edge digital technologies to demonstrate the
                        transformative benefits of digital innovation. <br></br>Developed as part of a master's thesis, this conceptual tool
                        focuses on <b>Use Case 30:</b> Digital Shop Floor, showcasing how digital solutions can enhance production efficiency.
                        It serves as a potential resource for decision-makers, providing insights into solving operational challenges and
                        highlighting relevant LM concepts and digital technologies. The goal is to generate awareness and interest in these
                        advancements.
                    </p>
                    <p className="text-lg leading-relaxed">
                        If you have any questions or queries, please feel free to contact Peter Michaelis at
                        <a href="mailto:petertomomimichael.michaelis@student.unisg.ch" className="text-blue-500 hover:underline ml-2">
                            petertomomimichael.michaelis@student.unisg.ch
                            <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
                        </a>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;