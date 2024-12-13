const CapabilitiesDropdown = () => {
    return (
      <div className="z-40 p-5 bg-gray-50 shadow-lg rounded-md grid grid-cols-3 gap-8 text-blue-900">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Infrastructure Services</h3>
          <ul className="space-y-2">
            <li>Airports</li>
            <li>Bridges</li>
            <li>Dams and Hydroelectric Plants</li>
            <li>Groundwater Development</li>
            <li>Hydraulics and Hydrology</li>
            <li>Irrigation</li>
            <li>Land Development</li>
            <li>Power Distribution</li>
            <li>Process Engineering</li>
            <li>Project Delivery</li>
            <li>Roadways</li>
            <li>Stormwater</li>
            <li>Water</li>
            <li>Wastewater</li>
          </ul>
        </div>
  
        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Building Design</h3>
          <ul className="space-y-2">
            <li>Electrical</li>
            <li>Fire Protection</li>
            <li>Information and Communications Technology</li>
            <li>Mechanical</li>
            <li>Site Civil</li>
            <li>Structural</li>
          </ul>
        </div>
  
        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Survey and Geomatics</h3>
          <ul className="space-y-2">
            <li>Boundary and Cadastral</li>
            <li>Control Survey</li>
            <li>Construction Staking</li>
            <li>Hydrographic and Hydraulic</li>
          </ul>
        </div>
  
        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Environmental</h3>
          <ul className="space-y-2">
            <li>Hazard Mitigation</li>
            <li>Regulatory Compliance and Permitting</li>
            <li>Stream Restoration</li>
          </ul>
        </div>
  
        {/* Column 5 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Planning</h3>
          <ul className="space-y-2">
            <li>Infrastructure</li>
            <li>Funding</li>
          </ul>
        </div>
  
        {/* Column 6 */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Technology</h3>
          <ul className="space-y-2">
            <li>3D Scanning</li>
            <li>Building Information Modeling (BIM)</li>
            <li>Geographic Information Systems (GIS)</li>
            <li>Managed IT Services</li>
            <li>Virtual Reality</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CapabilitiesDropdown;
  