var Invoice = /** @class */ (function () {
    // private _client: string
    // private _details: string
    // private _amount: number
    function Invoice(_client, _details, _amount) {
        this._client = _client;
        this._details = _details;
        this._amount = _amount;
    }
    Invoice.prototype.format = function () {
        return this._client + " owes $" + this._amount + " for " + this._details;
    };
    return Invoice;
}());
export default Invoice;
