import { Link } from "react-router-dom";

const CapabilitiesDropdown = () => {
    return (
        <div className="grid grid-cols-3 gap-6 p-2 !w-[600px] relative " style={{left:"0px"}}>
            <div>
                <h3 className="text-lg font-bold uppercase mb-4">Infrastructure</h3>
                <ul className="space-y-2">
                    <li><Link to="/infrastructure/water">Water</Link></li>
                    <li><Link to="/infrastructure/waste-water">Waste Water</Link></li>
                    <li><Link to="/infrastructure/ease-of-living">Ease of Living</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold uppercase mb-4">Design & Engineering</h3>
                <ul className="space-y-2">
                    <li><Link to="/design-engineering/water-modelling">Water Modelling</Link></li>
                    <li><Link to="/design-engineering/sewer-modelling">Sewer Modelling</Link></li>
                    <li><Link to="/design-engineering/flood-modelling">Flood Modelling</Link></li>
                    <li><Link to="/design-engineering/bim-modelling">BIM Modelling</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold uppercase mb-4">Nature Based Solutions</h3>
                <ul className="space-y-2">
                    <li><Link to="/nature-based-solutions/cleantech">Cleantech</Link></li>
                    <li><Link to="/nature-based-solutions/environmental">Environmental</Link></li>
                    <li><Link to="/nature-based-solutions/solid-waste">Solid Waste</Link></li>
                    <li><Link to="/nature-based-solutions/wetland-rejuvenation">Wetland Rejuvenation</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold uppercase mb-4">Trenchless</h3>
                <ul className="space-y-2">
                    <li><Link to="/trenchless/sewer-rehabilitation">Sewer Rehabilitation</Link></li>
                    <li><Link to="/trenchless/micro-tunneling">Micro-Tunneling</Link></li>
                    <li><Link to="/trenchless/condition-assessment">Condition Assessment</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold uppercase mb-4">Technology</h3>
                <ul className="space-y-2">
                    <li><Link to="/technology/industrial-iot">Industrial IoT</Link></li>
                    <li><Link to="/technology/ai-analytics">AI Analytics</Link></li>
                    <li><Link to="/technology/blockchain-platform">Blockchain Platform</Link></li>
                    <li><Link to="/technology/advance-tech-facilities">Advance Tech Facilities</Link></li>
                    <li><Link to="/technology/digital-marketing">Digital Marketing</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default CapabilitiesDropdown;
