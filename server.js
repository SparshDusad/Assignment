const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use('/api', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
