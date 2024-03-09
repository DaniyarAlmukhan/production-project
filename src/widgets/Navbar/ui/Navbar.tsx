import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.navbar, {}, [className])}>

      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classes.mainLink}>{t('main')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('about')}</AppLink>
      </div>

    </div>
  )
}

