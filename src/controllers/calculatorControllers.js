const { add,subtract,multiply,divide,outputResult } = require('../models/calculatorModels');

const calculatorController = {
	add(req,res){
		const { a,b } = req.body;
		const result = add(a,b);
		res.json({result});
	},
	subtract(req,res){
		const { a,b } = req.body;
		const result = subtract(a,b);
		res.json({result});
	},
	multiply(req,res){
		const { a,b } = req.body;
		const result = multiply(a,b);
		res.json({result});
	},
	divide(req,res){
		const { a,b } = req.body;
		try {
            const result = divide(a, b);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
	},
	outputResult(req, res) {
        const result = outputResult();
        if (result !== 0) {
            res.json({ Result: result });
        } else {
            res.status(404).json({ error: 'you need to perform some calculation first!!' });
        }
    }

}


module.exports = calculatorController;