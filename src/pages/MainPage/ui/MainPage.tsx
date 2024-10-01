import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Counter } from '../../../entities/Counter/ui/Counter';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <>
      <div>{t('main')}</div>
      <Counter />
      <Input value={value} onChange={onChange} placeholder="Введите текст" />
    </>
  );
};

export default MainPage;
