import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const BugButton: FC = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={onThrow} className={classNames('', {}, [])}>
      {t('throwError')}
    </Button>
  );
};
