import HasFormatter from "../interfaces/HasFormatter"

export default class Invoice implements HasFormatter {
    // private _client: string
    // private _details: string
    // private _amount: number

    constructor(private _client: string,
        private _details: string,
        private _amount: number) {
    }

    format() {
        return `${this._client} owes $${this._amount} for ${this._details}`
    }

}