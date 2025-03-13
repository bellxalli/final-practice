import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000;
const workouts = [];

app.get('/', (req, res) => 
{
    res.render('home');
});

app.post('/summary', (req, res) =>
{
    const workout = {
        type: req.body.type,
        duration: req.body.duration,
        intensity: req.body.intensity,
        date: req.body.date,
        notes: req.body.notes
    }

    console.log(workout);
    workouts.push(workout);

    res.render('summary', {workouts});
});

app.get('/admin/workouts', (req, res) =>
{
    res.render('admin', {workouts});
});

app.listen(PORT, () => 
{
    console.log(`Server is running at http://localhost:${PORT}`);
});
