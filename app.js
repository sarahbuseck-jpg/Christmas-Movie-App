const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
    res.send('My Christmas Movie App!');
});

// Example programs route
app.get('/programs', async (req, res) => {
    // In a real scenario, you would fetch data from an API or database
    // For demonstration, we just send a JSON array
    const programs = [
        { id: 1, title: 'Home Alone' },
        { id: 2, title: 'Elf' },
        { id: 3, title: 'The Grinch' }
    ];

    res.json(programs);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
