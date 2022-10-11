export default function Name() {
    return (
        <div className="form-group col-lg-6">
            <label htmlFor="nameInput">Name</label>
            <input type="name" className="form-control" id="nameInput" aria-describedby="nameHelp" required></input>
        </div>
    );
}