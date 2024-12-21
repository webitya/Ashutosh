import React from "react";
import { Drawer, Collapse, Button } from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;
// ====

    

// ====
const menuData = [
  {
    title: "Industries",
    key: "1",
    items: [
      { name: "Smart Infrastructure (Housing)", link: "/smart-industry" },
      { name: "Climate Change", link: "/climate-change" },
      { name: "Water Management", link: "/water-management" },
      { name: "Mobility (Transportation)", link: "/mobility" },
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
          { name: "Smart Cities", link: "/infrastructure/cities" },
          { name: "Water", link: "/infrastructure/water" },
          { name: "Waste Water", link: "/infrastructure/waste-water" },
          { name: "Ease of Living", link: "/infrastructure/ease-of-living" },
        ],
      },
      {
        category: "Design & Engineering",
        subItems: [
          { name: "Water Modelling", link: "/design-engineering/water-modelling" },
          { name: "Sewer Modelling", link: "/design-engineering/sewer-modelling" },
          { name: "Flood Modelling", link: "/design-engineering/flood-modelling" },
          { name: "BIM Modelling", link: "/design-engineering/bim-modelling" },
        ],
      },
      {
        category: "Nature Based Solutions",
        subItems: [
          { name: "Cleantech", link: "/nature-based-solutions/cleantech" },
          { name: "Environmental", link: "/nature-based-solutions/environmental" },
          { name: "Solid Waste", link: "/nature-based-solutions/solid-waste" },
          { name: "Wetland Rejuvenation", link: "/nature-based-solutions/wetland-rejuvenation" },
        ],
      },
      {
        category: "Trenchless",
        subItems: [
          { name: "Sewer Rehabilitation", link: "/trenchless/sewer-rehabilitation" },
          { name: "Micro-Tunneling", link: "/trenchless/micro-tunneling" },
          { name: "Condition Assessment", link: "/trenchless/condition-assessment" },
        ],
      },
      {
        category: "Technology",
        subItems: [
          { name: "Industrial IoT", link: "/technology/industrial-iot" },
          { name: "AI Analytics", link: "/technology/ai-analytics" },
          { name: "Blockchain Platform", link: "/technology/blockchain-platform" },
          { name: "Digital Marketing", link: "/technology/digital-marketing" },
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
      <div>
        {menuData.map((menu) => (
          <Collapse key={menu.key} ghost>
            <Panel
              key={menu.key}
              header={
                <Button type="default" block className="text-left font-semibold">
                  {menu.title}
                </Button>
              }
            >
              {menu.items.map((item, index) =>
                item.subItems ? (
                  <Collapse key={`sub-${index}`} ghost>
                    <Panel
                      key={`category-${index}`}
                      header={
                        <Button type="link" block className="text-left text-blue-600 font-bold">
                          {item.category}
                        </Button>
                      }
                    >
                      <div className="flex flex-col gap-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link to={subItem.link} key={subIndex}>
                            <Button type="default" block>
                              {subItem.name}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </Panel>
                  </Collapse>
                ) : (
                  <Link to={item.link} key={index}>
                    <Button type="default" block className="mb-2">
                      {item.name}
                    </Button>
                  </Link>
                )
              )}
            </Panel>
          </Collapse>
        ))}

        {/* Static Menu Items */}
        <div className="mt-4">
          {[
            { name: "Projects", link: "/projects" },
            { name: "Insights", link: "/insights" },
            { name: "Careers", link: "/careers" },
            { name: "About", link: "/about" },
            { name: "Contact Us", link: "/contact" },
          ].map((item, index) => (
            <Link to={item.link} key={index}>
              <Button  block className="mb-2">
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerEl;
