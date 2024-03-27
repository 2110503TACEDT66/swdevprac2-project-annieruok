export interface ReservationItem {
    bookDate: string,
    _id: string,
    company: CompanyItem,
    createdAt: string,
    id: string
}
export interface ReservationJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: ReservationItem[]
}
export interface CompanyItem{
    name: string,
    tel: string,
    description: string,
    website: string,
    _id: string,
    id: string,
}
export interface CompanyJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
}