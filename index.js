const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db'); 
const produtosRoutes = require('./routes/produtosRoutes');  
const foodTruckRoutes = require('./routes/FoodTruck'); 

connectDB(); 
app.use(cors());

app.use(express.json()); 
app.use('/api/produtos', produtosRoutes);
app.use('/api/foodtrucks', foodTruckRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
