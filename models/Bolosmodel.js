const bodyParser = require("body-parser");

    class BolosModel {

        static list = [
            {
                id: 1,
                sabor: 'Laranja',
                preco: 12
            },
            {
                id: 2,
                sabor: 'Limão',
                preco: 20

            }
        ]

        static read() {
            return BolosModel.list;
        }
        static getById(id) {
            const register = BolosModel.list.filter(item => item.id === Number(id));
        }

        static create(data){
            BolosModel.list.push(data);
        }
        static update(id,data){
            const index = BolosModel.list.findIndex( item => item.id === Number(id));
            
        }
        static delete(id) {
            BolosModel.list.delete(id)
        }
            
    }