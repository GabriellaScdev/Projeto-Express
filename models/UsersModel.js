class UsersModel {
    static list = [
     { 
        id:1,
        login:"admin2",
        senha: "admin321"

    },
    { 
        id:2,
        login:"admin3",
        senha: "admin322"

    }
    ];

    static read() {
        return UsersModel.list;
    }
    static getById(id){
        const register = BolosModel.list.filter(item => item.id === Number(id));
        return data;
    }
    static create(data) {
        UsersModel.list.push(data);

    }
    static update(id,data) {
        const index = UsersModel.list.findIndex(item => item.id === Number(id) );
        UsersModel.list[index] = data;
    }
    static delete(id) {
        const data = UsersModel.list.findIndex( item => item.id === Number(id));
        UsersModel.list = data;
    }


}
module.exports = UsersModel;