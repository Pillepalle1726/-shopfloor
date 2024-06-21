import React from 'react';

const Sidebar1: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 *:h-full font-semibold">
            <h1 className="">Real-Time Order Status Visibility</h1>

            <p className="text-sm text-gray-500">
                Accurate order data improves production planning, optimizing resources,
                reducing waste, and ensuring timely deliveries. This enhances customer
                satisfaction, reduces costs, and streamlines processes. Real-time data
                also improves inventory control, minimizing excess stock and ensuring
                continuous production.
            </p>
            <div className="mb-4">
                <h2 className="">Key Technologies</h2>
                <ul className="list pl-4 text-sm text-gray-500">
                    <li><strong>ERP System:</strong> Visualization of data from an enterprise perspective.</li>
                    <li><strong>SCADA System:</strong> Centralized supervisory and control lead to less costs for monitoring.</li>
                    <li><strong>Track & Trace Technologies:</strong> Better planning through more data points.</li>
                </ul>
            </div>
            <div>
                <h2 className="">Lean Manufacturing Principles</h2>
                <ul className="list pl-4 text-sm text-gray-500">
                    <li><strong>Process factors:</strong> Pull production, continuous flow, and setup time reduction.</li>
                    <li><strong>Control and human factors:</strong> TPM, statistical process control, and employee participation.</li>
                </ul>
            </div>
            <div className="mt-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    Find your perfect partner for free to tackle your problems and be future-proofed! – Click here
                </a>
            </div>
        </div>
    );
};

export default Sidebar1;