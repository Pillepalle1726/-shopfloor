const Sidebar2: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 *:h-full font-semibold">
            <h1 className="">Improving Data Visualization of Production Process</h1>

            <p className="text-sm text-gray-500">
                Real-time process visualization gives managers a comprehensive view of the shop floor,
                enhancing decision-making, resource allocation, schedules, and quality control. This leads to reduced costs and increased productivity
                by identifying and addressing inefficiencies.
            </p>

            <div className="mb-4">
                <h2 className="">Main focus is on clean and understandable data with the key technologies:</h2>
                <ul className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>ERP System:</strong> Visualization of Data from an enterprise perspective.</li>
                    <li><strong>MES System:</strong> Increased transparency of information from the manufacturing process.</li>
                    <li><strong>SCADA System:</strong> Centralized supervisory and control lead to less costs for monitoring.</li>
                    <li><strong>IoT:</strong> Better planning through more transparency and connected softwares and tools.</li>
                    <li><strong>Sensors and Actuators:</strong> Better planning through more data points.</li>
                </ul>
            </div>
            <div>
                <h2 className="">Relevant Lean Manufacturing principles are:</h2>
                <ul className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Process Factors:</strong> Consisting of pull production, continuous flow, and setup time reduction.</li>
                    <li><strong>Control and Human Factors:</strong> Consisting of TPM, statistical process control, and employee participation.</li>
                    <li><strong>Supplier Factors:</strong> Consisting of supplier feedback, supplier development, and just-in-time delivery.</li>
                    <li><strong>Customer Factors:</strong> Comprising customer involvement.</li>
                </ul>
            </div>
            <div className="mt-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    Want to find out more?
                    Find your perfect partner for free to tackle your problems and be future-proofed! – Click here
                </a>
            </div>
        </div>
    );
};

export default Sidebar2;