import React from "react";
import { TextField, InputGroup, Select, ListBox, Checkbox } from "@heroui/react";
import { Magnifier, ChevronDown } from "@gravity-ui/icons";

export default function JobFilters({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedCategory,
  setSelectedCategory,
  isRemoteOnly,
  setIsRemoteOnly
}) {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-[24px] border border-zinc-800/80 max-w-7xl mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

        {/* Search */}
        <div className="md:col-span-5">
          <TextField
            value={searchQuery}
            onChange={(value) => setSearchQuery(value)}
            className="w-full"
          >
            <span className="block mb-2 text-sm font-medium text-zinc-400">
              Search Jobs
            </span>

            <InputGroup className="h-11 bg-zinc-800 border border-zinc-700 rounded-xl focus-within:border-purple-500 transition-all">
              <InputGroup.Prefix className="pl-3 text-zinc-500">
                <Magnifier className="w-4 h-4" />
              </InputGroup.Prefix>

              <InputGroup.Input
                placeholder="Title, company, or keywords..."
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm px-3 outline-none"
              />
            </InputGroup>
          </TextField>
        </div>

        {/* Job Type */}
        <div className="md:col-span-3">
          <span className="block mb-2 text-sm font-medium text-zinc-400">
            Job Type
          </span>

          <Select
            selectedKey={selectedType}
            onSelectionChange={(key) => setSelectedType(key)}
          >
            <Select.Trigger className="w-full h-11 min-w-0 flex items-center justify-between bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 rounded-xl px-3 text-sm transition-all">
              <div className="flex-1 overflow-hidden">
                <Select.Value className="truncate whitespace-nowrap">
                  {selectedType === "all"
                    ? "All Types"
                    : selectedType.replace("-", " ")}
                </Select.Value>
              </div>

              <Select.Indicator>
                <ChevronDown className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              </Select.Indicator>
            </Select.Trigger>

            <Select.Popover className="bg-zinc-800 border border-zinc-700 rounded-xl shadow-xl mt-1 overflow-hidden z-50">
              <ListBox className="p-1">
                <ListBox.Item
                  id="all"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  All Types
                </ListBox.Item>

                <ListBox.Item
                  id="full-time"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  Full-time
                </ListBox.Item>

                <ListBox.Item
                  id="part-time"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  Part-time
                </ListBox.Item>

                <ListBox.Item
                  id="contract"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  Contract
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Category */}
        <div className="md:col-span-3">
          <span className="block mb-2 text-sm font-medium text-zinc-400">
            Category
          </span>

          <Select
            selectedKey={selectedCategory}
            onSelectionChange={(key) => setSelectedCategory(key)}
          >
            <Select.Trigger className="w-full h-11 min-w-0 flex items-center justify-between bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 rounded-xl px-3 text-sm transition-all">
              <div className="flex-1 overflow-hidden">
                <Select.Value className="truncate whitespace-nowrap">
                  {selectedCategory === "all"
                    ? "All Categories"
                    : selectedCategory}
                </Select.Value>
              </div>

              <Select.Indicator>
                <ChevronDown className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              </Select.Indicator>
            </Select.Trigger>

            <Select.Popover className="bg-zinc-800 border border-zinc-700 rounded-xl shadow-xl mt-1 overflow-hidden z-50">
              <ListBox className="p-1">
                <ListBox.Item
                  id="all"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  All Categories
                </ListBox.Item>

                <ListBox.Item
                  id="engineering"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  Engineering
                </ListBox.Item>

                <ListBox.Item
                  id="design"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  Design
                </ListBox.Item>

                <ListBox.Item
                  id="product"
                  className="px-3 py-2 text-sm text-zinc-200 hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer"
                >
                  Product
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Remote */}
        <div className="md:col-span-1 h-11 flex items-center justify-start md:justify-center">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isRemoteOnly}
              onChange={(e) => setIsRemoteOnly(e.target.checked)}
              className="w-4 h-4 accent-purple-500"
            />

            <span className="text-sm font-medium text-zinc-300">
              Remote
            </span>
          </label>
        </div>

      </div>
    </div>
  );
}