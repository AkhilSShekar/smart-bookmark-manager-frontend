import './BookmarkCard.css';

const BookmarkCard = ({ bookmark, onDelete, onEdit }) => {
    return (
        <div className="card">
            <div className="card-info">
                <h3>{bookmark.title}</h3>
                <a href={bookmark.url} target="_blank" rel="noreferrer">{bookmark.url}</a>
            </div>
            <div className="card-actions">
                <button className="edit-btn" onClick={() => onEdit(bookmark)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(bookmark._id)}>Delete</button>
            </div>
        </div>
    );
};

export default BookmarkCard;