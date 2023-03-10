import Footer from '../../components/layout/Footer';

const PartialFooter = (props) => {
  return (
    <Footer />
  );
};

export async function getStaticProps() {
  return {
    props: {
      items: []
    }
  };
}

export default PartialFooter;
