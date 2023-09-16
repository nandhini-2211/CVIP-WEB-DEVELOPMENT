document.addEventListener('DOMContentLoaded', function () {
    const originalUrlInput = document.getElementById('originalUrl');
    const shortenButton = document.getElementById('shortenButton');
    const shortenedUrlInput = document.getElementById('shortenedUrl');
    const copyButton = document.getElementById('copyButton');
  
    shortenButton.addEventListener('click', async function () {
        const originalUrl = originalUrlInput.value;
  
        try {
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`);
  
            if (response.ok) {
                const shortenedUrl = await response.text();
                shortenedUrlInput.value = shortenedUrl;
            } else {
                console.error('Failed to shorten URL');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
  
    copyButton.addEventListener('click', function () {
        shortenedUrlInput.select();
        document.execCommand('copy');
        alert('Copied to clipboard');
    });
  });