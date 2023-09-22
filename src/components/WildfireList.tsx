import React from "react";
import { Table } from "antd";

interface WildfireListProps {
  data: { name: string; country: string }[];
}

const WildfireList: React.FC<WildfireListProps> = ({ data }) => {
  const columns: Array<any> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a: any, b: any) => a.country.localeCompare(b.country), // Sort alphabetically by country name
      defaultSortOrder: "ascend", // Sort in ascending order by default
    },
  ];

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: 5, // Display 5 items per page
          position: ["bottomRight"],
        }}
        rowKey={(record: any, index: any) => index?.toString()}
      />
    </div>
  );
};

export default WildfireList;
