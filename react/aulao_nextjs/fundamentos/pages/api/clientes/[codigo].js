export default function handler(req, res) {
    const codigo = req.query.codigo;
    res.status(200).json({
        id: req.query.codigo,
        nome: `Maria ${codigo}`,
        email: `mariamaria${codigo}@gmaria.com`
    });
}