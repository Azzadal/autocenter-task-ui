import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { useState } from 'react';

export const TradeInForm: React.FC = () => {
  const [accept, setAccept] = useState<boolean>(true);
  return (
    <>
      <span style={{ fontSize: '20px' }}>Оформить заявку на Trade-In</span>
      <Form>
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
                label={connectionType === 'tel' ? 'Телефон' : 'Email'}
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
        <Button disabled={accept}>Отправить заявку</Button>
      </Form>
    </>
  );
};
