import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Input, InputNumber, Select, TimePicker, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";
const { RangePicker: TimeRangePicker } = TimePicker;
const { TextArea } = Input;
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const Post = () => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const currentDate = new Date();
  const currentDayjsDate = dayjs(currentDate);
  const onChange = (value) => {
    console.log("changed", value);
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <Container>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <form>
          <Row>
            <Col sm={8}>
              <div className="d-flex flex-column gap-3">
                <strong>Thông tin chung</strong>
                <div className=" d-flex flex-column gap-3">
                  <Input
                    placeholder="Địa chỉ sân"
                    style={{ padding: "10px" }}
                  />
                  <Input placeholder="Tiêu đề" style={{ padding: "10px" }} />
                  <TextArea rows={4} placeholder="Mô tả chi tiết" />
                </div>
                <strong>Yêu cầu về thành viên</strong>
                <div className="d-flex gap-3">
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChange={onChange}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  />
                  <Select
                    mode="tags"
                    style={{
                      width: "100%",
                      flex: 1,

                      borderRadius: "0px !important",
                    }}
                    placeholder="Tags Mode"
                    onChange={onChange}
                    options={options}
                  />
                </div>
                <div className="d-flex gap-3">
                  <Select
                    mode="tags"
                    style={{
                      width: "100%",
                      flex: 1,
                      borderRadius: "0px !important",
                      padding: "15px",
                    }}
                    placeholder="Tags Mode"
                    onChange={onChange}
                    options={options}
                  />
                  <Select
                    mode="tags"
                    style={{
                      width: "100%",
                      flex: 1,
                      padding: "15px",
                      borderRadius: "0px !important",
                    }}
                    placeholder="Tags Mode"
                    onChange={onChange}
                    options={options}
                  />
                </div>
                <strong>Thời gian và Chi phí</strong>
                <div
                  className="d-flex gap-3"
                  style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="d-flex align-items-center gap-5">
                    <span>Ngày bắt đầu</span>
                    <DatePicker
                      defaultValue={currentDayjsDate}
                      // minDate là ngày hiện tại
                      disabledDate={(current) =>
                        current && current < currentDayjsDate.startOf("day")
                      }
                      // maxDate không bị giới hạn
                      disabledDatee={(current) =>
                        current && current < currentDayjsDate.startOf("day")
                      }
                    />
                    <TimeRangePicker />
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Input
                    placeholder="Giá thuê nữ"
                    style={{ padding: "15px" }}
                  />
                  <Input
                    placeholder="Gía thuê nam"
                    style={{ padding: "15px" }}
                  />
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <button className="btn btn-danger">Hủy</button>
                  <button className="btn btn-warning">Đăng tin</button>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex flex-column gap-3">
                <strong>Thông tin liên hệ</strong>
                <div className="">
                  <Input
                    placeholder="Số điện thoại"
                    style={{ padding: "10px" }}
                  />
                </div>
                <strong>Hình ảnh mô tả</strong>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Post;
