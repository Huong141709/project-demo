import { Button, Table, TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DataType } from "../types/table.type";
import { dataSource } from "../data/tableData";
import { AddModalTable } from "../components/AddModalTable";
import React = require("react");

export default function TableDemoPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<DataType[]>(dataSource);
  const [editingRecord, setEditingRecord] = useState<DataType | null>(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setEditingRecord(null);
  };

  const handleDeleteData = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleAddData = (values: { type: string; value: string }) => {
    const newData: DataType = {
      key: (data.length + 1).toString(),
      listType: values.type,
      listValue: values.value,
    };
    setData([...data, newData]);
    handleCloseModal();
  };

  const handleEditData = (record: DataType) => {
    setEditingRecord(record);
    setIsOpen(true);
  };

  const handleUpdateData = (values: { type: string; value: string }) => {
    if (editingRecord) {
      const newData = data.map((item) =>
        item.key === editingRecord.key
          ? { ...item, listType: values.type, listValue: values.value }
          : item
      );
      setData(newData);
    }
    handleCloseModal();
  };

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
      render: (_, record) => (
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => handleEditData(record)}
            shape="circle"
            icon={<EditOutlined />}
          />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteData(record.key)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        title={() => (
          <p className="text-1xl font-bold">
            <Button type="primary" onClick={handleOpenModal}>
              Add
            </Button>
          </p>
        )}
      />
      <AddModalTable
        isOpen={isOpen}
        onCancel={handleCloseModal}
        onSubmit={editingRecord ? handleUpdateData : handleAddData}
        initialValues={
          editingRecord
            ? { type: editingRecord.listType, value: editingRecord.listValue }
            : null
        }
      />
    </>
  );
}
