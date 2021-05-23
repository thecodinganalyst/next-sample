
export function getContent(category, item){
    return "This is " + item + " in " + category;
}

export function getPaths(){
    return getNavigation().flatMap(category => {
        return category.items.map(item => {
            return {
                params: {
                    category: category.display.replace(' ', '_'),
                    item: item.display.replace(' ', '_'),
                }
            }
        })
    })
}

export function getNavigation(){
    return [
        {
            display: "Group 1",
            items: [
                { display: "Item 1", link: "/Group_1/Item_1" },
                { display: "Item 2", link: "/Group_1/Item_2" },
                { display: "Item 3", link: "/Group_1/Item_3" }
            ]
        },
        {
            display: "Group 2",
            items: [
                { display: "Item 4", link: "/Group_2/Item_4" },
                { display: "Item 5", link: "/Group_2/Item_5" },
                { display: "Item 6", link: "/Group_2/Item_6" }
            ]
        },
        {
            display: "Group 3",
            items: [
                { display: "Item 7", link: "/Group_3/Item_7" },
                { display: "Item 8", link: "/Group_3/Item_8" },
                { display: "Item 9", link: "/Group_3/Item_9" }
            ]
        }
    ];
}