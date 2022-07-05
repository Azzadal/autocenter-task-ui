import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { useState } from 'react';

export type FormTradeInType = {
  connection?: string;
  'connection-type'?: string;
};

interface ITradeInFormProps {
  onSubmit: (data: FormTradeInType) => void;
}

export const TradeInForm: React.FC<ITradeInFormProps> = ({ onSubmit }) => {
  const [accept, setAccept] = useState<boolean>(true);

  const handleFinish = (data: FormTradeInType) => {
    onSubmit(data);
  };

  return (
    <>
      <span style={{ fontSize: '20px' }}>Оформить заявку на Trade-In</span>
      <Form<FormTradeInType> onFinish={handleFinish}>
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
          Отправить заявку
        </Button>
      </Form>
    </>
  );
};
