import Layout from "../components/Layout";

export default function Home({categories}) {
  return (
      <Layout title="Next Sample" categories={categories}>
        Hello World!
      </Layout>
  )
}

export async function getStaticProps(context){
    const categories = [
        {
            display: "Group 1",
            items: [
                { display: "Item 1", link: "/item-1" },
                { display: "Item 2", link: "/item-2" },
                { display: "Item 3", link: "/item-3" }
            ]
        },
        {
            display: "Group 2",
            items: [
                { display: "Item 4", link: "/item-4" },
                { display: "Item 5", link: "/item-5" },
                { display: "Item 6", link: "/item-5" }
            ]
        },
        {
            display: "Group 3",
            items: [
                { display: "Item 7", link: "/item-7" },
                { display: "Item 8", link: "/item-8" },
                { display: "Item 9", link: "/item-9" }
            ]
        }
    ]
    return {
        props: {categories}
    }
}