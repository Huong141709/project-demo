import { Button, Table, TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DataType } from "../types/table.type";
import { dataSource } from "../data/tableData";

export default function TableDemoPage() {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "List Type",
      dataIndex: "listType",
      key: "listType",
    },
    {
      title: "List Value",
      dataIndex: "listValue",
      key: "listValue",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              console.log("edit");
            }}
            shape="circle"
            icon={<EditOutlined />}
          />
          <Button
            onClick={() => {
              console.log("delete");
            }}
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
}
