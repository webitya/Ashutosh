import React from "react";
import { Drawer, Collapse } from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

// Data for Industries and Capabilities
const menuData = [
  {
    title: "Industries",
    key: "1",
    items: [
      { name: "Smart Infrastructure (Housing)", link: "/industries/smart-infrastructure" },
      { name: "Climate Change", link: "/industries/climate-change" },
      { name: "Water Management", link: "/industries/water-management" },
      { name: "Mobility (Transportation)", link: "/industries/mobility" },
      { name: "Smart Industry (Industry)", link: "/industries/smart-industry" },
    ],
  },
  {
    title: "Capabilities",
    key: "2",
    items: [
      {
        category: "Infrastructure",
        subItems: [
          { name: "Water", link: "/capabilities/infrastructure/water" },
          { name: "Waste Water", link: "/capabilities/infrastructure/waste-water" },
          { name: "Ease of Living", link: "/capabilities/infrastructure/ease-of-living" },
        ],
      },
      {
        category: "Design & Engineering",
        subItems: [
          { name: "Water Modelling", link: "/capabilities/design-engineering/water-modelling" },
          { name: "Sewer Modelling", link: "/capabilities/design-engineering/sewer-modelling" },
          { name: "Flood Modelling", link: "/capabilities/design-engineering/flood-modelling" },
          { name: "BIM Modelling", link: "/capabilities/design-engineering/bim-modelling" },
        ],
      },
      {
        category: "Nature Based Solutions",
        subItems: [
          { name: "Cleantech", link: "/capabilities/nature/cleantech" },
          { name: "Environmental", link: "/capabilities/nature/environmental" },
          { name: "Solid Waste", link: "/capabilities/nature/solid-waste" },
          { name: "Wetland Rejuvenation", link: "/capabilities/nature/wetland-rejuvenation" },
        ],
      },
      {
        category: "Trenchless",
        subItems: [
          { name: "Sewer Rehabilitation", link: "/capabilities/trenchless/sewer-rehabilitation" },
          { name: "Micro-Tunneling", link: "/capabilities/trenchless/micro-tunneling" },
          { name: "Condition Assessment", link: "/capabilities/trenchless/condition-assessment" },
        ],
      },
      {
        category: "Technology",
        subItems: [
          { name: "Industrial IoT", link: "/capabilities/technology/industrial-iot" },
          { name: "AI Analytics", link: "/capabilities/technology/ai-analytics" },
          { name: "Blockchain Platform", link: "/capabilities/technology/blockchain" },
          { name: "Advance Tech Facilities", link: "/capabilities/technology/tech-facilities" },
          { name: "Digital Marketing", link: "/capabilities/technology/digital-marketing" },
        ],
      },
    ],
  },
];

const DrawerEl = ({ isDrawerVisible, closeDrawer }) => {
  return (
    <Drawer
      title="Menu"
      placement="left"
      closable={true}
      onClose={closeDrawer}
      open={isDrawerVisible}
      width={300}
    >
      <ul className="text-sm uppercase tracking-wide">
        {/* Map through Menu Data */}
        {menuData.map((menu) => (
          <li key={menu.key} className="cursor-pointer mb-4">
            <Collapse ghost>
              <Panel
                header={<span className="text-black font-bold">{menu.title}</span>}
                key={menu.key}
              >
                {menu.items.map((item, index) =>
                  item.subItems ? (
                    <div key={index} className="mb-4">
                      <h4 className="text-blue-700 font-bold mb-2">{item.category}</h4>
                      <ul className="list-none pl-0 text-gray-700">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="mb-2">
                            <Link
                              to={subItem.link}
                              className="hover:text-blue-500 transition"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <ul key={index} className="list-none pl-0 text-gray-700">
                      <li className="mb-2">
                        <Link to={item.link} className="hover:text-blue-500 transition">
                          {item.name}
                        </Link>
                      </li>
                    </ul>
                  )
                )}
              </Panel>
            </Collapse>
          </li>
        ))}

        {/* Static Menu Items */}
        {[
          { name: "Projects", link: "/projects" },
          { name: "Insights", link: "/insights" },
          { name: "Careers", link: "/careers" },
          { name: "About", link: "/about" },
          { name: "Contact Us", link: "/contact" },
        ].map((item, index) => (
          <li key={index} className="text-black cursor-pointer mb-4">
            <Link to={item.link} className="hover:text-blue-500 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default DrawerEl;
