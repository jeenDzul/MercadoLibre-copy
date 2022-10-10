import { useRouter } from "next/router";
import Main from "components/UI/organisms/Main";


interface QueryInterface {
  search?: string;
}

const Home = () => {
  const router = useRouter();
  const { search }: QueryInterface = router.query;

  return (
    <Main searchValue={search} />
  );

}

export default Home;
