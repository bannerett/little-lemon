import AnimatePage from 'components/AnimatePage';
import PageDescription from 'components/PageDescription';
import Section from 'components/Section';
import Orders from 'components/Orders/Orders';
import OrdersTotal from 'components/Orders/OrdersTotal';
import { useAppSelector } from 'store/store.hooks';
import { selectOrderLength } from 'store/order/orderSlice';

function OrderOnline() {
  const ordersCount = useAppSelector(selectOrderLength);

  return (
    <AnimatePage>
      <PageDescription heading="Order Online" title="Order Online" description="Order Online description...">
        <OrdersTotal />
      </PageDescription>
      <Section>{ordersCount > 0 && <Orders />}</Section>
    </AnimatePage>
  );
}

export default OrderOnline;
