import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t('main')}</div>
      <Counter />
    </>
  );
};

export default MainPage;
