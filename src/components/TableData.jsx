import React from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    render: (text, record, index) => index + 1,
  },
  { title: "Name", dataIndex: "customerName", key: "name" },
  { title: "Date", dataIndex: "date", key: "date" },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    render: (priority) => {
      let color = "";
      if (priority === "Low") {
        color = "green";
      } else if (priority === "Medium") {
        color = "yellow";
      } else {
        color = "red";
      }
      return (
        <Tag color={color} key={priority}>
          {priority.toUpperCase()}
        </Tag>
      );
    },
  },
];

const TableData = (props) => {
  const { data, loading } = props;

  return (
    <div className="flex flex-1 p-4">
      <Table
        dataSource={data}
        columns={columns}
        footer={() => {
          "";
        }}
        bordered
        rowKey={"id"}
        scroll={{ x: "max-content" }}
        loading={loading}
        className="w-full"
      />
    </div>
  );
};

export default TableData;
