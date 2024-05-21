const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dummy = 0;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', (req, res) => {
    const { firstName, lastName, email, phoneNumber, userType } = req.body;

    // Here you would typically save the user data to your database
    // For this example, we'll just return the data back

    res.json({
        message: 'User registered successfully',
        user: {
            firstName,
            lastName,
            email,
            phoneNumber,
            userType
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
