export default function Content() {
    return (
        <div className="form-group">
            {/* <label for="contentInput">Content</label> */}
            <textarea type="content" className="form-control" id="contentInput" aria-describedby="contentHelp" placeholder="How can Enzie help you?" required></textarea>
        </div>
    );
}