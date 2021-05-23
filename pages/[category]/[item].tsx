import {getContent, getNavigation, getPaths} from "../../lib/content";
import Layout from "../../components/layout";

export default function Item({content, categories}) {
    return (
        <Layout title="Next Sample" categories={categories}>
            {content}
        </Layout>
    );
}

export async function getStaticPaths(){
    const paths = getPaths();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const content = getContent(context.params.category, context.params.item);
    const categories = getNavigation();
    return {
        props: {content, categories}
    }
}