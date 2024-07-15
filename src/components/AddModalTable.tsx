import { Button, Form, Modal, Select } from "antd";

type AddModalTableProps = {
  isOpen: boolean;
  onCancel: () => void;
};

export function AddModalTable({ isOpen, onCancel }: AddModalTableProps) {
  const [form] = Form.useForm();

  const onClose = () => {
    onCancel();
    form.resetFields();
  };

  return (
    <Modal
      open={isOpen}
      title="Title"
      onCancel={onClose}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            console.log("form", form.getFieldsValue());
          }}
        >
          Submit
        </Button>,
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
      ]}
    >
      <Form form={form}>
        <Form.Item name="type">
          <Select className="w-full">
            <Select.Option value="Discipline">Discipline</Select.Option>
            <Select.Option value="AgreementType">AgreementType</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="value">
          <Select className="w-full">
            <Select.Option value="Discipline">Option 1</Select.Option>
            <Select.Option value="AgreementType">Option 2</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
