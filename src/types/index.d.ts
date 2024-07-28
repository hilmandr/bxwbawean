import { Icon, IconProps } from "iconsax-react";

export type TSidenav = {
  title: string;
  path: string;
  icon?: Icon;
};

export type TMenu = {
  title: string;
  path: string;
  variant?: IconProps["variant"];
  submenu?: TMenu[];
};

export type TLayanan = {
  thumbnail: Icon;
  title: string;
  description: string;
  path: string;
};

export type TBerita = {
  thumbnail: string;
  title: string;
  date: Date;
  path: string;
};

export type TFaq = {
  item: string;
  question: string;
  answer: string;
};

export type TAddressFooter = {
  icon: Icon;
  name: string;
};

export type TTautanFooter = {
  name: string;
  path: string;
};

export type TSosmedFooter = {
  icon: Icon;
  path: string;
};
