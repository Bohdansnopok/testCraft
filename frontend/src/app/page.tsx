import AdviceRegister from '@/components/adviceRegister/adviceRegister';
import Banner from '@/components/banner/banner';
import LastTests from '@/components/lastTests/lastTests';
import Registration from '@/components/registration/registration';
import Reviews from '@/components/reviews/reviews';
import TestCounter from '@/components/testCounter/testCounter';
import TestLinks from '@/components/testLinks/testLinks';

export default function Home() {
  return (
    <div>
      <Banner />
      <TestLinks /> 
      <AdviceRegister />
      <Reviews />
      <LastTests />
      <TestCounter />
    </div>
  );
}
