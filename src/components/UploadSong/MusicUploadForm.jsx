import { useState } from "react";

export function MusicUploadForm() {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Assuming only one audio file is allowed
    if (file && (file.type === 'audio/mp3' || file.type === 'audio/wav')) {
      setAudioFile(file);
    } else {
      // Handle invalid file type error
      console.error('Please upload a valid audio file (MP3 or WAV).');
    }
  };
  return (
      <div>
        <label htmlFor="audioFileInput">Select an audio file (MP3 or WAV):</label>
        <input
            type="file"
            id="audioFileInput"
            accept=".mp3, .wav"  // Specify accepted file types
            onChange={handleFileChange}
        />

        {audioFile && (
            <div>
              <p>Selected audio file: {audioFile.name}</p>
              {/* You can add more information about the file here */}
            </div>
        )}
      </div>
  );

}