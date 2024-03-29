import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <BugButton />
      <div>{t('main')}</div>
    </>
  );
};

export default MainPage;
