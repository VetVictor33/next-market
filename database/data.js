import { assets } from "@/imports/assets";

export const productsMock = [
    {
        id: 1, name: 'alface', price: '0.99', storage: 12,
        description: 'alfaces verdinhos', src: assets.Lettuce, altSrc: 'verduras veridnhas'
    },
    {
        id: 2, name: 'tomate', price: '3.99', storage: 22,
        description: 'tomates vermelinhos', src: assets.Tomato, altSrc: 'tomatos vermelinhos'
    },
    {
        id: 3, name: 'feijão preto', price: '5.99', storage: 14,
        description: 'feijões pretinhos', src: assets.BlackBeans, altSrc: 'frijoles calientes'
    }
]