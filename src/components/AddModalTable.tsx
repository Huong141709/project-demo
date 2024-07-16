import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";

type AddModalTableProps = {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (values: { type: string; value: string }) => void;
  initialValues?: { type: string; value: string } | null;
};

export function AddModalTable({
  isOpen,
  onCancel,
  onSubmit,
  initialValues,
}: AddModalTableProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      open={isOpen}
      title={initialValues ? "Edit Entry" : "Add New Entry"}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
    >
      <Form form={form}>
        <Form.Item
          name="type"
          rules={[{ required: true, message: "Please select a type" }]}
        >
          <Select placeholder="Select a type" className="w-full">
            <Select.Option value="Discipline">Discipline</Select.Option>
            <Select.Option value="AgreementType">AgreementType</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="value"
          rules={[{ required: true, message: "Please input a value" }]}
        >
          <Input placeholder="Enter a value" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
