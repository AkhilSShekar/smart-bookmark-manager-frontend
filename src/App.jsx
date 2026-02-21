import { SignedIn, SignedOut, SignInButton, UserButton, useClerk } from "@clerk/clerk-react";
import { useState, useEffect } from 'react';
import axios from './api/axios';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import './App.css';

function App() {
    const { signOut } = useClerk();
    const [bookmarks, setBookmarks] = useState([]);
    const [editingBookmark, setEditingBookmark] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBookmarks = async () => {
        try {
            setLoading(true);
            const res = await axios.get('/');
            setBookmarks(res.data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const addBookmark = async (data) => {
        try {
            await axios.post('/', data);
            fetchBookmarks();
        } catch (error) {
            console.error("Add error:", error);
        }
    };

    const updateBookmark = async (id, data) => {
        try {
            await axios.put(`/${id}`, data);
            setEditingBookmark(null);
            fetchBookmarks();
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    const deleteBookmark = async (id) => {
        if (window.confirm("Are you sure you want to delete this bookmark?")) {
            try {
                await axios.delete(`/${id}`);
                fetchBookmarks();
            } catch (error) {
                console.error("Delete error:", error);
            }
        }
    };

    const handleEditClick = (bookmark) => {
        setEditingBookmark(bookmark);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        fetchBookmarks();
    }, []);

    return (
        <div className="container">
            <SignedOut>
                <div className="login-page">
                    <h1>Smart Bookmark Manager</h1>
                    <p>Securely organize your favorite links.</p>
                    <SignInButton mode="modal">
                        <button className="login-btn">Get Started</button>
                    </SignInButton>
                </div>
            </SignedOut>

            <SignedIn>
                <header className="app-header">
                    <div>
                        <h1>Smart Bookmark Manager</h1>
                        <p className="subtitle">Welcome back to your dashboard</p>
                    </div>
                    <div className="header-actions">
                        <button className="logout-btn" onClick={() => signOut({ redirectUrl: '/' })}>
                            Logout
                        </button>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </header>

                <main>
                    <BookmarkForm 
                        onAdd={addBookmark} 
                        onUpdate={updateBookmark} 
                        editingBookmark={editingBookmark} 
                    />
                    {loading ? (
                        <div className="loader">Syncing links...</div>
                    ) : (
                        <BookmarkList 
                            bookmarks={bookmarks} 
                            onDelete={deleteBookmark} 
                            onEdit={handleEditClick} 
                        />
                    )}
                </main>
            </SignedIn>
        </div>
    );
}

export default App;