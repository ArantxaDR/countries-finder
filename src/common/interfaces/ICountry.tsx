export interface ICountry{
    name: string;
    alpha2Code: string;    
    flag: string;
    population: number;
    capital: string;
    region: string,
    subregion: string;
    area: number
    currencies: ICurrencies[];
    languages: ILanguages[];
}

interface ICurrencies{
    code: string;
    name: string;
    symbol: string;
}

export interface ILanguages{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}