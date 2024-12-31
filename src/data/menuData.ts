import { breakfastItems } from './categories/breakfast';
import { griddleItems } from './categories/griddle';
import { starterItems } from './categories/starters';
import { mainItems } from './categories/mains';
import { specialtyItems } from './categories/specialties';
import { extraItems } from './categories/extras';

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
  options?: string[];
}

export interface MenuData {
  [key: string]: MenuItem[];
}

export const MENU_DATA: MenuData = {
  ...breakfastItems,
  ...griddleItems,
  ...starterItems,
  ...mainItems,
  ...specialtyItems,
  ...extraItems
};