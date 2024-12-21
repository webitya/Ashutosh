import { Link } from "react-router-dom";

const IndustriesDropdown = () => {
    return (
        <>
            <ul className="text-blue-900 z-40 p-2">
                <li className="hover:text-blue-600 cursor-pointer py-1">
                    <Link to="/smart-infrastructure">SMART INFRASTRUCTURE</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer py-1">
                    <Link to="/climate-change">CLIMATE CHANGE</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer py-1">
                    <Link to="/water-management">WATER MANAGEMENT</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer py-1">
                    <Link to="/mobility">MOBILITY (TRANSPORTATION)</Link>
                </li>
                <li className="hover:text-blue-600 cursor-pointer py-1">
                    <Link to="/smart-industry">SMART INDUSTRY (INDUSTRY)</Link>
                </li>
            </ul>
        </>
    );
};

export default IndustriesDropdown;
