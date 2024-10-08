import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        name=""
        id=""
        className={cls.input}
        placeholder={t('Введите username')}
        autofocus
      />
      <Input
        type="text"
        name=""
        id=""
        className={cls.input}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>
        {t('login')}
      </Button>
    </div>
  );
};
