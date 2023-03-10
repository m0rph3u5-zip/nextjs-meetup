import MainNavigation from '../../components/layout/MainNavigation';

const PartialHeader = (props) => {
  return (
    <MainNavigation />
  );
};

export async function getStaticProps() {
  return {
    props: {
      items: []
    }
  };
}

export default PartialHeader;
