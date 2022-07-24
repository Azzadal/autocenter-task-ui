import { Button, Form, Input, Select } from 'antd';

export interface IServiceFormData {
  auto: string;
  serviceType: string;
}

interface IServiceFormProps {
  onSubmit: (data: IServiceFormData) => void;
}

export const ServiceForm: React.FC<IServiceFormProps> = ({ onSubmit }) => {
  const handleFinish = (data: IServiceFormData) => {
    onSubmit(data);
  };
  return (
    <>
      <span style={{ fontSize: '20px' }}>Оформить заявку на ремонт или ТО</span>
      <Form onFinish={handleFinish}>
        <Form.Item name="auto" label="Автомобиль">
          <Input type="text"></Input>
        </Form.Item>
        <Form.Item name="serviceType" label="Вид обслуживания">
          <Select>
            <Select.Option value="maintenance">Плановое ТО</Select.Option>
            <Select.Option value="repair">Ремонт</Select.Option>
          </Select>
        </Form.Item>
        <Button htmlType="submit">Отправить</Button>
      </Form>
    </>
  );
};
