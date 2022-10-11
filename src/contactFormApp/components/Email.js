export default function Email() {
    return (
        <div className="form-group col-lg-6">
            <label htmlFor="emailInput">Email address</label>
            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" required></input>
            <small id="emailHelp" className="form-text text-muted">Your email will never be shared with anyone else.</small>
        </div>
    );
}