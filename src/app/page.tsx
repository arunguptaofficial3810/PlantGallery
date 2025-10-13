import CustomerReview from '@/Components/CustomerReview/page';
import FeaturedPlants from '../Components/FeaturedPlants/page';
import HomeBanner from '../Components/HomeBanner/page';

export default function Home() {
  return (
    <section>
    <HomeBanner />
    <FeaturedPlants />
    <CustomerReview />
    </section>
  );
}
