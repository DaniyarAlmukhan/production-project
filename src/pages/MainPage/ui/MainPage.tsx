import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../entities/Counter/ui/Counter';

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
