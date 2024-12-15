import React, { useState } from "react";
import { products } from "./products";
import { Select, Card, Empty, Input, Button } from "antd";
import {
  EnvironmentOutlined,
  BuildOutlined,
  ToolOutlined,
  SettingOutlined,
  TeamOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const FilterableProducts = () => {
  const [filters, setFilters] = useState({
    industry: "",
    capabilities: "",
    location: "",
    search: "",
  });

  // Dynamic filter options
  const industries = [...new Set(products.map((project) => project.industry))];
  const capabilities = [...new Set(products.map((project) => project.capabilities))];
  const locations = [...new Set(products.map((project) => project.location))];

  const handleFilterChange = (value, name) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleReset = () => {
    setFilters({
      industry: "",
      capabilities: "",
      location: "",
      search: "",
    });
  };

  const filteredproducts = products.filter((project) => {
    return (
      (filters.industry === "" || project.industry === filters.industry) &&
      (filters.capabilities === "" || project.capabilities === filters.capabilities) &&
      (filters.location === "" || project.location === filters.location) &&
      (filters.search === "" ||
        project.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search by title"
          value={filters.search}
          onChange={handleSearchChange}
          className="w-full text-white bg-[#1E3A8A] placeholder-white"
          size="large"
          prefix={<SearchOutlined className="text-white" />}
          style={{
            backgroundColor: "#1E3A8A",
            color: "white",
            borderColor: "#1E3A8A",
          }}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Select
          placeholder="Industry"
          value={filters.industry}
          onChange={(value) => handleFilterChange(value, "industry")}
          className="w-1/4"
          style={{
            backgroundColor: "#1E3A8A",
            color: "white",
            borderColor: "#1E3A8A",
          }}
        >
          {industries.map((industry) => (
            <Option key={industry} value={industry}>
              {industry === "Mining" ? (
                <TeamOutlined className="mr-2 text-[#1E3A8A]" />
              ) : industry === "Infrastructure" ? (
                <BuildOutlined className="mr-2 text-[#1E3A8A]" />
              ) : (
                <ToolOutlined className="mr-2 text-[#1E3A8A]" />
              )}
              {industry}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Capabilities"
          value={filters.capabilities}
          onChange={(value) => handleFilterChange(value, "capabilities")}
          className="w-1/4"
          style={{
            backgroundColor: "#1E3A8A",
            color: "white",
            borderColor: "#1E3A8A",
          }}
        >
          {capabilities.map((capability) => (
            <Option key={capability} value={capability}>
              {capability === "Engineering" ? (
                <ToolOutlined className="mr-2 text-[#1E3A8A]" />
              ) : capability === "Construction" ? (
                <BuildOutlined className="mr-2 text-[#1E3A8A]" />
              ) : (
                <SettingOutlined className="mr-2 text-[#1E3A8A]" />
              )}
              {capability}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Location"
          value={filters.location}
          onChange={(value) => handleFilterChange(value, "location")}
          className="w-1/4"
          style={{
            backgroundColor: "#1E3A8A",
            color: "white",
            borderColor: "#1E3A8A",
          }}
        >
          {locations.map((location) => (
            <Option key={location} value={location}>
              <EnvironmentOutlined className="mr-2 text-[#1E3A8A]" />
              {location}
            </Option>
          ))}
        </Select>
        <Button
          onClick={handleReset}
          icon={<ReloadOutlined />}
          className="w-1/4 sm:w-auto bg-[#1E3A8A] text-white"
        >
          Reset Filters
        </Button>
      </div>

      {/* Project Cards or No Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredproducts.length > 0 ? (
          filteredproducts.map((project) => (
            <Card
              key={project.id}
              cover={<img src={project.image} alt={project.title} />}
              className="shadow-lg bg-[#1E3A8A] text-white"
              style={{ backgroundColor: "#1E3A8A", color: "white" }}
            >
              <h3 className="font-semibold text-lg text-white">{project.title}</h3>
              <p className="text-gray-300 flex items-center mt-2">
                <EnvironmentOutlined className="mr-2 text-white" />{" "}
                {project.location}
              </p>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center">
            <Empty description="No Data Found" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterableProducts;
