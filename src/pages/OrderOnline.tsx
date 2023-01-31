import { shallowEqual, useSelector } from 'react-redux';
import AnimatePage from 'components/AnimatePage';
import PageDescription from 'components/PageDescription';
import { selectOrder } from 'store/order/orderSlice';

function OrderOnline() {
  const order = useSelector(selectOrder, shallowEqual);

  console.log({ order });

  return (
    <AnimatePage>
      <PageDescription heading="Order Online" title="Order Online" description="Order Online description..." />
    </AnimatePage>
  );
}

export default OrderOnline;
