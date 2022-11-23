import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <img
      {...props}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
};

export default Avatar;
