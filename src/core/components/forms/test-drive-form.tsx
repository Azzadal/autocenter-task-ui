import { Button, Checkbox, Form, Input, Radio, Select } from 'antd';
import { useState } from 'react';
import { ICarResponse } from '../../entities/car/model/car';

interface ITestDriveFormProps {
  cars: ICarResponse[];
  onSubmit: (data: FormTestDriveType) => void;
}

export type FormTestDriveType = {
  car_id?: number;
  connection?: string;
  'connection-type'?: string;
};

export const TestDriveForm: React.FC<ITestDriveFormProps> = ({ cars, onSubmit }) => {
  const [accept, setAccept] = useState<boolean>(true);
  const handleFinish = (data: FormTestDriveType) => {
    onSubmit(data);
  };

  return (
    <>
      <span style={{ fontSize: '20px' }}>Оформить заявку на Test-drive</span>
      <Form<FormTestDriveType> onFinish={handleFinish}>
        <Form.Item name="car_id">
          <Select>
            {cars.map((car, index) => {
              return (
                <Select.Option key={index} value={car.id}>
                  {car.model.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="connection-type" label="Выберите предпочтительный способ связи">
          <Radio.Group defaultValue="tel">
            <Radio value={'tel'}>По телефону</Radio>
            <Radio value={'email'}>По email</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item dependencies={['connection-type']}>
          {({ getFieldValue }) => {
            const connectionType = getFieldValue('connection-type');
            return (
              <Form.Item
                label={connectionType === 'email' ? 'Email' : 'Телефон'}
                name="connection"
              >
                <Input type={connectionType === 'tel' ? 'tel' : 'email'} />
              </Form.Item>
            );
          }}
        </Form.Item>
        <Checkbox onChange={() => setAccept((prev) => !prev)}>
          Согласие на обработку данных
        </Checkbox>
        <Button disabled={accept} htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
