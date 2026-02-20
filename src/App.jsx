import { SignedIn, SignedOut, SignInButton, UserButton, useClerk, useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from 'react';
import axios from './api/axios';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import './App.css';

function App() {
    const { signOut } = useClerk();
    const { getToken, isSignedIn } = useAuth(); // Hook to get secure token
    const [bookmarks, setBookmarks] = useState([]);
    const [editingBookmark, setEditingBookmark] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBookmarks = async () => {
        if (!isSignedIn) return;
        try {
            setLoading(true);
            const token = await getToken();
            const res = await axios.get('/', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBookmarks(res.data);
        } catch (error) {
            console.error("Error fetching:", error);
        } finally {
            setLoading(false);
        }
    };

    const addBookmark = async (data) => {
        const token = await getToken();
        await axios.post('/', data, {
            headers: { Authorization: `Bearer ${token}` }
        });
        fetchBookmarks();
    };

    const updateBookmark = async (id, data) => {
        const token = await getToken();
        await axios.put(`/${id}`, data, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setEditingBookmark(null);
        fetchBookmarks();
    };

    const deleteBookmark = async (id) => {
        if (window.confirm("Delete?")) {
            const token = await getToken();
            await axios.delete(`/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchBookmarks();
        }
    };

    const handleEditClick = (bookmark) => {
        setEditingBookmark(bookmark);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (isSignedIn) fetchBookmarks();
    }, [isSignedIn]);

    return (
        <div className="container">
            <SignedOut>
                <div className="login-page">
                    <h1>Smart Bookmark Manager</h1>
                    <SignInButton mode="modal">
                        <button className="login-btn">Sign In to Dashboard</button>
                    </SignInButton>
                </div>
            </SignedOut>

            <SignedIn>
                <header className="app-header">
                    <div>
                        <h1>Smart Bookmark Manager</h1>
                        <p className="subtitle">Your private collection</p>
                    </div>
                    <div className="header-actions">
                        <button className="logout-btn" onClick={() => signOut({ redirectUrl: '/' })}>Logout</button>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </header>

                <main>
                    <BookmarkForm onAdd={addBookmark} onUpdate={updateBookmark} editingBookmark={editingBookmark} />
                    {loading ? <div className="loader">Loading...</div> : 
                    <BookmarkList bookmarks={bookmarks} onDelete={deleteBookmark} onEdit={handleEditClick} />}
                </main>
            </SignedIn>
        </div>
    );
}

export default App;