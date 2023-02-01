import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { SpecialDish } from 'types/SpecialDish';
import greekSalad from 'assets/img/specials/greek-salad.jpg';
import bruchetta from 'assets/img/specials/bruchetta.jpg';
import lemonDessert from 'assets/img/specials/lemon-dessert.jpg';

interface MenuState {
  value: SpecialDish[];
}

const initialState: MenuState = {
  value: [
    {
      id: 'greek-salad',
      name: 'greek-salad',
      imgSrc: greekSalad,
      heading: 'Greek Salad',
      price: 12.99,
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      label: 'Order a delivery',
    },
    {
      id: 'bruchetta',
      name: 'bruchetta',
      imgSrc: bruchetta,
      heading: 'Bruchetta',
      price: 5.99,
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      label: 'Order a delivery',
    },
    {
      id: 'lemon-dessert',
      name: 'lemon-dessert',
      imgSrc: lemonDessert,
      heading: 'Lemon Dessert',
      price: 5.0,
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      label: 'Order a delivery',
    },
  ],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addMenuItem: (state, { payload }: PayloadAction<SpecialDish>) => {
      state.value.push(payload);
    },
  },
});

export const selectMenu = (state: RootState): SpecialDish[] => state.menu.value;

export const selectMenuById = (state: RootState): Record<string, SpecialDish> =>
  state.menu.value.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {});

export const { addMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
