import Banner from "../../components/forHome/Banner";
import BazaarNestOffer from "../../components/forHome/BazaarNestOffer";
import LatestBlogs from "../../components/forHome/LatestBlogs";
import LatestProducts from "../../components/forHome/LatestProducts";
import TopCategories from "../../components/forHome/TopCategories";
import Newsletter from "../../components/Newsletter";


const Home = () => {
    return (
        <div>
            <Banner />
            <LatestProducts />
            <BazaarNestOffer />
            <TopCategories />
            <Newsletter />
            <LatestBlogs />
        </div>
    );
};

export default Home;