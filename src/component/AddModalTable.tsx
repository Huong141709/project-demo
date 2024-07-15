import { Button, Form, Modal, Select } from "antd";

type AddModalTableProps = {
  isOpen: boolean;
  onCancel: () => void;
};

export function AddModalTable({ isOpen, onCancel }: AddModalTableProps) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={isOpen}
      title="Title"
      onCancel={onCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={async () => {
            console.log("form", await form.validateFields());
          }}
        >
          Submit
        </Button>,
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
    >
      <Form form={form}>
        <Form.Item>
          <Select className="w-full">
            <Select.Option value="Discipline">Discipline</Select.Option>
            <Select.Option value="AgreementType">AgreementType</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Select className="w-full">
            <Select.Option value="Discipline">Option 1</Select.Option>
            <Select.Option value="AgreementType">Option 2</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
