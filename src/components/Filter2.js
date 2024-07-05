import React from "react";
import { Select } from "antd";

const Filter2 = () => {
  return (
    <div className="d-flex gap-3 pt-4">
      <Select
        showSearch
        placeholder="Thành Phố"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: "1", label: "Hồ Chí Minh" },
          { value: "2", label: "Hà Nội" },
          { value: "3", label: "Tỉnh thành khác" },
        ]}
        dropdownStyle={{ zIndex: 9999999999, borderRadius: "20px" }}
      />
    </div>
  );
};

export default Filter2;
