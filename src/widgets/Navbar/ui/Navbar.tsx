import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => setIsOpen(false), []);
  const onShowModal = useCallback(() => setIsOpen(true), []);
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={classes.links} onClick={onShowModal}>
        {t('login')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
