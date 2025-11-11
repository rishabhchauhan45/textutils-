import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // यह इम्पोर्ट सही है

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark mode has been enabled", "success");
            document.title = 'TextUtils - Dark Mode';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            document.title = 'TextUtils - Light Mode';
        }
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />

                <div className='container my-3'>
              
                    <Routes>
                        {/* 2. 'element' prop का इस्तेमाल करें और 'exact' हटा दें */}
                        <Route path="/about" element={<About mode={mode} />} />
                        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;