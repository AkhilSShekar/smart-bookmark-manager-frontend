import { useState, useEffect } from 'react';
import './BookmarkForm.css';

const BookmarkForm = ({ onAdd, onUpdate, editingBookmark }) => {
    const [formData, setFormData] = useState({ title: '', url: '' });

    useEffect(() => {
        if (editingBookmark) {
            setFormData({ title: editingBookmark.title, url: editingBookmark.url });
        } else {
            setFormData({ title: '', url: '' });
        }
    }, [editingBookmark]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingBookmark) {
            onUpdate(editingBookmark._id, formData);
        } else {
            onAdd(formData);
        }
        setFormData({ title: '', url: '' });
    };

    return (
        <form className="bookmark-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required 
            />
            <input 
                type="url" 
                placeholder="URL (https://...)" 
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                required 
            />
            <button type="submit">
                {editingBookmark ? 'Update Bookmark' : 'Add Bookmark'}
            </button>
        </form>
    );
};

export default BookmarkForm;