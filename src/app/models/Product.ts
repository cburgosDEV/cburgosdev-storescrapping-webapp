export class Product {
    id: number;
    name: string;
    lastPrice: number;
    historicalMinPrice: number;
    discountRate: number;
    isHistoricalPrice: boolean;
    detailHref: string;
    fullDetailHref: string;
    imgSrc: string = "../assets/img/no-image.jpg";
    brand: string;
    store: string;
    productDetailList: any
    chart: any;
    categoryId: number;
    brandId: number;

    constructor
    (
        id: number, 
        name: string, 
        lastPrice: number,
        historicalMinPrice: number,
        discountRate: number,
        isHistoricalPrice: boolean,
        detailHref: string,
        fullDetailHref: string,
        imgSrc: string, 
        brand: string, 
        store: string,
        productDetailList: any,
        chart: any,
        categoryId: number,
        brandId: number
    ) 
    {
        this.id = id;
        this.name = name;
        this.lastPrice = lastPrice;
        this.historicalMinPrice = historicalMinPrice;
        this.discountRate = discountRate;
        this.isHistoricalPrice = isHistoricalPrice;
        this.detailHref = detailHref;
        this.fullDetailHref = fullDetailHref;
        this.imgSrc = imgSrc;
        this.brand = brand;
        this.store = store;
        this.productDetailList = productDetailList;
        this.chart = chart;
        this.categoryId = categoryId;
        this.brandId = brandId;
    }
}