export class Continent {
    code: string;
    name: string;
    countries: Country[];

}

export class Country {
    code: string;
    name: string;
    continent: Continent;
    phone: string;
    native: string;
    currency: string;
    languages: Language[];
    emoji: string;
    emojiU: string;
}

export class Language {
    code: string;
    name: string;
    natvie: string;
    rtl: number;
}