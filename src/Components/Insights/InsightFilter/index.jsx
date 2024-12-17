import React, { useState } from "react";
import { insights } from "./insights.js";
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
import "./FilterableInsights.css";

const { Option } = Select;

const Filterableinsights = () => {
  const [filters, setFilters] = useState({
    industry: "",
    capabilities: "",
    location: "",
    search: "",
  });

  const industries = [...new Set(insights.map((p) => p.industry))];
  const capabilities = [...new Set(insights.map((p) => p.capabilities))];
  const locations = [...new Set(insights.map((p) => p.location))];

  const handleFilterChange = (value, name) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({ industry: "", capabilities: "", location: "", search: "" });
  };

  const filteredinsights = insights.filter((p) => {
    return (
      (!filters.industry || p.industry === filters.industry) &&
      (!filters.capabilities || p.capabilities === filters.capabilities) &&
      (!filters.location || p.location === filters.location) &&
      (!filters.search || p.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const filterOptions = [
    { name: "industry", placeholder: "Industry", data: industries, icon: TeamOutlined },
    {
      name: "capabilities",
      placeholder: "Capabilities",
      data: capabilities,
      icon: SettingOutlined,
    },
    { name: "location", placeholder: "Location", data: locations, icon: EnvironmentOutlined },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search by title"
          value={filters.search}
          onChange={(e) => handleFilterChange(e.target.value, "search")}
          size="large"
          prefix={<SearchOutlined className="text-gray-500" />}
          className="w-full shadow-md rounded-lg"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {filterOptions.map((filter) => (
          <Select
            key={filter.name}
            placeholder={`Select ${filter.placeholder}`}
            value={filters[filter.name] || undefined}
            onChange={(value) => handleFilterChange(value, filter.name)}
            className="w-full sm:w-1/4 shadow-md rounded-lg"
            allowClear
          >
            {filter.data.map((option) => (
              <Option key={option} value={option}>
                <filter.icon className="mr-2 text-blue-700" />
                {option}
              </Option>
            ))}
          </Select>
        ))}
        <Button
          onClick={handleReset}
          icon={<ReloadOutlined />}
          className="bg-blue-700 text-white hover:bg-blue-800 shadow-md rounded-lg"
        >
          Reset Filters
        </Button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredinsights.length > 0 ? (
          filteredinsights.map((project) => (
            <div
              key={project.id}
              className="card-container flex flex-col h-full rounded-lg overflow-hidden"
            >
              <Card
                cover={
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 object-cover w-full"
                  />
                }
                className="shadow-lg flex flex-col flex-grow"
                bodyStyle={{ flexGrow: 1 }}
              >
                <h3 className="font-semibold text-lg text-blue-800">{project.title}</h3>
                <p className="text-gray-600 flex items-center mt-2">
                  <EnvironmentOutlined className="mr-2 text-blue-600" />
                  {project.location}
                </p>
              </Card>
              {/* Overlay */}
              <div className="card-overlay">
                <p>{project.demoText}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center">
            <Empty description="No insights Found" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filterableinsights;
