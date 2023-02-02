import { MouseEvent, useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store.hooks';
import { authLogout, selectUserEmail } from 'store/auth/authSlice';
import { navLinks } from 'constants/navLinks';
import { HeaderLink } from 'types/HeaderLink';

export const useNavLinks = (): HeaderLink[] => {
  const dispatch = useAppDispatch();
  const userEmail = useSelector(selectUserEmail, shallowEqual);

  const logout = useCallback(
    (_: MouseEvent<HTMLElement>) => {
      dispatch(authLogout());
    },
    [dispatch]
  );

  return navLinks.map(link => {
    if (link.id === 'login') {
      return {
        ...link,
        props: { ...link.props, type: !userEmail ? 'link' : 'button', action: logout },
      };
    }

    return link;
  });
};
