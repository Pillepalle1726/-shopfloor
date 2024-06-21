const Sidebar3: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-ful font-semibold">
            <h1 className="">Improving Transparency of Process Performance</h1>

            <p className="text-sm text-gray-500">
                Real-time process visualization gives managers a complete view of the shop floor,
                enabling quick identification of downtime events. This allows for faster decision-making,
                optimized processes, reduced delays, enhanced throughput, and early detection of defects.
            </p>

            <div className="mb-4">
                <h2 className="">Main focus is on interpretable data with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>SCADA System:</strong> Process irregularities can be reduced leading to less downtimes of machines.</li>
                    <li><strong>Cloud Computing:</strong> IT infrastructure is better accessible and transparent through cloud technology.</li>
                    <li><strong>IoT:</strong> More insights through more transparency and connected software and tools.</li>
                    <li><strong>Sensors and Actuators:</strong> Improved insights through more and reliable data points.</li>
                </ol>
            </div>
            <div>
                <h2 className="">Relevant Lean Manufacturing principles are:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Process Factors:</strong> Consisting of pull production, continuous flow, and setup time reduction.</li>
                    <li><strong>Control and Human Factors:</strong> Consisting of TPM, statistical process control, and employee participation.</li>
                    <li><strong>Supplier Factors:</strong> Consisting of supplier feedback, supplier development, and just-in-time delivery.</li>
                </ol>
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

export default Sidebar3;