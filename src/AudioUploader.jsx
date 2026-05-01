import { useState } from 'react';
import axios from 'axios';
import { UploadCloud, FileAudio, Loader2, FileText, AlertCircle } from 'lucide-react';
import './App.css';

const AudioUploader = () => {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setError(""); 
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please choose an audio file first!");
            return;
        }

        setIsLoading(true);
        setError("");
        setTranscription("");

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(
                `${process.env.API_URL}/api/transcribe`,
                formData
            );
            
            setTranscription(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            setError("Failed to transcribe audio. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container">
            <h1>
                <FileAudio size={28} color="#007bff" />
                Audio Transcriber
            </h1>
            <p className="subtitle">Upload your audio file to get instant AI text</p>

            <div className="file-dropzone">
                <label className="dropzone-label">
                    {file ? (
                        <>
                            <FileAudio size={40} color="#007bff" />
                            <span className="file-info">{file.name}</span>
                            <span className="file-hint">Ready to process</span>
                        </>
                    ) : (
                        <>
                            <UploadCloud size={40} color="#94a3b8" />
                            <span className="file-info">Click to select a file</span>
                            <span className="file-hint">MP3, WAV, or M4A</span>
                        </>
                    )}
                    <input 
                        type="file" 
                        className="hidden-input" 
                        accept="audio/*" 
                        onChange={handleFileChange} 
                    />
                </label>
            </div>

            {error && (
                <div className="error-message">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                </div>
            )}

            <button 
                className="upload-button" 
                onClick={handleUpload} 
                disabled={!file || isLoading}
            >
                {isLoading ? (
                    <>
                        <Loader2 size={20} className="spinner" />
                        Transcribing...
                    </>
                ) : (
                    "Upload and Transcribe"
                )}
            </button>

            {transcription && (
                <div className="transcription-result">
                    <h2>
                        <FileText size={20} color="#10b981" />
                        Transcription Result:
                    </h2>
                    <p>{transcription}</p>
                </div>
            )}
        </div>
    );
}

export default AudioUploader;