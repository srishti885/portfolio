import { useState, useEffect } from "react";
import axios from "axios";
import { Shield, Trash2, Mail, User, Clock, Lock, FileText, CheckCircle } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Admin = () => {
    const { isHackerMode } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [data, setData] = useState({ messages: [], requests: [] });
    const [loading, setLoading] = useState(false);

    const accentColor = isHackerMode ? '#00c4cc' : '#2563eb';
    const cardBg = isHackerMode ? 'rgba(255,255,255,0.02)' : '#ffffff';
    const borderColor = isHackerMode ? '#111' : '#e2e8f0';

    const handleLogin = (e) => {
        e.preventDefault();
        // Master Password - Ise aap badal sakte hain
        if (password === "SRISHTI_ADMIN_2024") {
            setIsLoggedIn(true);
            fetchAdminData();
        } else {
            alert("ACCESS_DENIED: INVALID_MASTER_KEY");
        }
    };

    const fetchAdminData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:5000/api/admin/all-data");
            setData(res.data);
        } catch (err) {
            console.error("DATA_FETCH_ERROR");
        }
        setLoading(false);
    };

    const deleteMessage = async (id) => {
        if (window.confirm("Confirm delete message?")) {
            try {
                await axios.delete(`http://localhost:5000/api/admin/message/${id}`);
                fetchAdminData(); // Refresh data
            } catch (err) {
                alert("DELETE_FAILED");
            }
        }
    };

    if (!isLoggedIn) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: isHackerMode ? '#000' : '#f1f5f9' }}>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    style={{ textAlign: 'center', padding: '50px', border: `1px solid ${accentColor}`, borderRadius: '30px', background: cardBg }}>
                    <Lock size={50} color={accentColor} style={{ marginBottom: '20px' }} />
                    <h2 style={{ color: isHackerMode ? '#fff' : '#000', fontSize: '14px', letterSpacing: '5px' }}>SRISHTI_ADMIN_GATE</h2>
                    <input 
                        type="password" 
                        placeholder="ENTER_MASTER_KEY" 
                        style={{ display: 'block', margin: '30px auto', padding: '15px', background: 'none', border: `1px solid ${borderColor}`, color: isHackerMode ? '#fff' : '#000', borderRadius: '12px', width: '250px', textAlign: 'center' }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={handleLogin} style={{ background: accentColor, color: '#fff', border: 'none', padding: '12px 40px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>AUTHENTICATE</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ padding: '120px 60px', background: isHackerMode ? '#000' : '#f8fafc', minHeight: '100vh', color: isHackerMode ? '#fff' : '#0f172a', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                <h1 style={{ letterSpacing: '8px', fontSize: '18px', fontWeight: '900' }}> <Shield size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> ADMIN_DASHBOARD_v1.0</h1>
                <button onClick={() => setIsLoggedIn(false)} style={{ background: 'none', border: `1px solid ${accentColor}`, color: accentColor, padding: '8px 20px', borderRadius: '8px', cursor: 'pointer' }}>LOGOUT</button>
            </div>

            {/* --- RESUME REQUESTS SECTION --- */}
            <div style={{ marginBottom: '80px' }}>
                <h3 style={{ fontSize: '12px', letterSpacing: '4px', color: accentColor, marginBottom: '20px' }}>[ RESUME_ACCESS_LOGS ]</h3>
                <div style={{ overflowX: 'auto', background: cardBg, borderRadius: '20px', border: `1px solid ${borderColor}` }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: isHackerMode ? '#0a0a0a' : '#f1f5f9' }}>
                            <tr style={{ textAlign: 'left', borderBottom: `1px solid ${borderColor}` }}>
                                <th style={{ padding: '20px' }}>REQUESTER_NAME</th>
                                <th>OFFICIAL_EMAIL</th>
                                <th>REQUEST_DATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.requests.map((req) => (
                                <tr key={req._id} style={{ borderBottom: `1px solid ${borderColor}` }}>
                                    <td style={{ padding: '20px', fontWeight: 'bold' }}> <User size={14} style={{ marginRight: '8px' }} /> {req.requesterName}</td>
                                    <td> <Mail size={14} style={{ marginRight: '8px' }} /> {req.requesterEmail}</td>
                                    <td style={{ fontSize: '13px' }}> <Clock size={14} style={{ marginRight: '8px' }} /> {new Date(req.requestDate).toLocaleString()}</td>
                                    <td><span style={{ fontSize: '10px', background: `${accentColor}22`, color: accentColor, padding: '4px 10px', borderRadius: '20px' }}>SUCCESSFUL_HANDSHAKE</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- CONTACT MESSAGES SECTION --- */}
            <div>
                <h3 style={{ fontSize: '12px', letterSpacing: '4px', color: accentColor, marginBottom: '20px' }}>[ INCOMING_MESSAGES ]</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
                    {data.messages.map((msg) => (
                        <div key={msg._id} style={{ padding: '30px', background: cardBg, borderRadius: '20px', border: `1px solid ${borderColor}`, position: 'relative' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{msg.name}</span>
                                <Trash2 size={18} color="#ff4444" style={{ cursor: 'pointer' }} onClick={() => deleteMessage(msg._id)} />
                            </div>
                            <p style={{ fontSize: '12px', color: accentColor, marginBottom: '10px' }}>{msg.email}</p>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: isHackerMode ? '#888' : '#475569' }}>{msg.message}</p>
                            <p style={{ fontSize: '10px', marginTop: '20px', opacity: 0.5 }}>DATE: {new Date(msg.date).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;