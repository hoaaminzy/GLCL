import React from "react";
import { Select } from "antd";

const Filter1 = () => {
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
      <Select
        showSearch
        placeholder="Sản Phẩm"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: "1", label: "Giày" },
          { value: "2", label: "Vợt" },
          { value: "3", label: "Quần áo" },
          { value: "4", label: "Phụ kiện" },
        ]}
        style={{ borderRadius: "50px" }}
        dropdownStyle={{ zIndex: 9999999999 }}
      />
      <Select
        showSearch
        placeholder="Khoảng Giá"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: "1", label: "Dưới 500k" },
          { value: "2", label: "500.000 - 1.000.000" },
          { value: "3", label: "1.000.000 - 2.000.000" },
          { value: "4", label: "2.000.000 - 3.000.000" },
          { value: "5", label: "Trên 3.000.000" },
        ]}
        dropdownStyle={{ zIndex: 9999999999 }}
      />
      <Select
        showSearch
        placeholder="Tình Trạng"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: "1", label: "New 100%" },
          { value: "2", label: "Used 95% - 99%" },
          { value: "3", label: "Cũ" },
        ]}
        dropdownStyle={{ zIndex: 9999999999, borderRadius: "20px" }}
      />
    </div>
  );
};

export default Filter1;
