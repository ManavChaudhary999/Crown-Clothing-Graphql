const Initial_State = {
    sections: [
        {
            id: 1,
            title: 'hats',
            imageUrl: "https://image.shutterstock.com/image-photo/portrait-beautiful-woman-wearing-hat-260nw-1386124445.jpg",
            linkUrl: "shop/hats"
        },
        {
            id: 2,
            title: 'shoes',
            imageUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
            linkUrl: "shop/shoes"
    
        },
        {
            id: 3,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'shop/jackets'
        },
        {
            id: 4,
            title: 'mens',
            imageUrl: "https://i.pinimg.com/550x/34/d6/de/34d6dec2c5aeaeed7c48059e12b265f7.jpg",
            size: 'large',
            linkUrl: "shop/mens"
        },
        {
            id: 5,
            title: 'womens',
            imageUrl: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/11th_Feb_WS_M_ASP_NuonW_850x1305_72x-100.jpg?v=1644584515",
            size: 'large',
            linkUrl: "shop/womens"
        }
    ]
};

const directoryReducer = (state= Initial_State, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;