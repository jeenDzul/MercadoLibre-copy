import Breadcrumbs from "components/UI/molecules/Breadcrumbs";
import Main from "components/UI/organisms/Main";
import { useRouter } from "next/router";
import useSearch from "./hooks/useSearch";
import Template from "components/template/Template";
import ListElements from "components/UI/molecules/ListElements";

interface QueryInterface {
    search?: string;
}

const ListPage = () => {
    const router = useRouter();
    const { search }: QueryInterface = router.query;
    const { loading, data } = useSearch(search);

    const handleClickProduct = (id) => {
        router.push(`/items/${id}`);
    }

    return (
        <Main searchvalue={search}>
            <Template header={(<Breadcrumbs categories={data.categories} />)}>
                <ListElements onClick={handleClickProduct} products={data.products} />
            </Template>
        </Main>
    );
}


export default ListPage;