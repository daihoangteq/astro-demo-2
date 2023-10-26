export interface ITopAPI {
    id: string,
    name: string,
    avatar: string,
    phone: number,
    family: ITopAPI[],
}
export interface IMUAPI {
    name: string,
    avatar: string,
    number: number,
    position: string,
    age: string
}