import BookmarkCard from './BookmarkCard';
import './BookmarkList.css';

const BookmarkList = ({ bookmarks, onDelete, onEdit }) => {
    if (bookmarks.length === 0) {
        return <p className="empty-message">No bookmarks found. Add one above!</p>;
    }

    return (
        <div className="bookmark-list">
            {bookmarks.map((bookmark) => (
                <BookmarkCard 
                    key={bookmark._id} 
                    bookmark={bookmark} 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                />
            ))}
        </div>
    );
};

export default BookmarkList;