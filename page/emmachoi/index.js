Page({
    onPullDownRefresh: function () {
        console.log("refere", new Date());
    },
    data: {
        scrollTop: 100,
        logoImg: '/image/logo.png',
        shopcarImg: '/image/cart.png',

        autoplay: 'true',
        interval: '2000',
        duration: '500',
        bannerImg: [
            "/image/banner1.jpg",
            "/image/banner2.jpg",
            "/image/banner3.jpg",
            "/image/banner4.jpg"
        ],
        classifyImg: [
            { img: "/image/list.png", text: "分类" },
            { img: "/image/cart.png", text: "购物车" },
            { img: "/image/my.png", text: "我的商城" },
            { img: "/image/qian.png", text: "每日签到" }
        ],
        classify_bottom_img: "/image/banner1.jpg",
        techanImg: "/image/tese.jpg",
        goodsList: [
            {
                title: "今日推荐",
                goods: [
                    {
                        img: "/image/goods1.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "$166.80"
                    },
                    {
                        img: "/image/goods2.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "$106.80"
                    },
                    {
                        img: "/image/goods3.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "$416.80"
                    },
                    {
                        img: "/image/goods4.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                ]
            },
            {
                title: "on sale",
                goods: [
                    {
                        img: "/image/goods6.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods5.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods4.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods1.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods2.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods3.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                ]
            },
            {
                title: "鞋靴",
                goods: [
                    {
                        img: "/image/goods6.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods5.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods4.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods1.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods2.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods3.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                ]
            },
            {
                title: "猜你喜欢",
                goods: [
                    {
                        img: "/image/goods6.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods5.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods4.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods1.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods2.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                    {
                        img: "/image/goods3.jpg",
                        goodsSum: "Special sale on 11/11 from Emma Choi",
                        goodsPrice: "￥16.80"
                    },
                ]
            },

        ]
    },
    toTop: function (e) {
     
        this.setData({
            scrollTop: 0
        });
        console.log(this.data.scrollTop)
    }

})