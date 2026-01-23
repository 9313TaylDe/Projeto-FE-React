from flask import Flask,request,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

users = [
    {"email":"expedit","senha":"1234","status":True}
]

tarefas = [
    {"id": 1,"descricao":"","status":False}
]

@app.route("/")
def Home():
    return jsonify(users)

@app.route("/login", methods=["POST"])
def Login():
    dados = request.json
    email = dados.get("email")
    senha = dados.get("senha")
    
    for user in users:
        if user["email"] and user["senha"]:
            return jsonify(user), 200
        
    return jsonify({"error":"Usuario nao encontrado"}), 401


@app.route("/login", methods=["POST"])
def Cadastro(password):
    dados = request.json
    email = dados.get("email")
    password = dados.get("password")
    nome = dados.get("nome")
    
    if not email or not password or not nome:
        return jsonify({"error": "Dados incompletos"}), 200
    
    for user in users:
        if user["email"] == email:
            return jsonify({"status":"Usuario já existente"}), 409
        
    novo_usuario = {
        "email": email,
        "password": password,
        "nome": nome,
        "status": True
    }
    
    users.append(novo_usuario)
    return jsonify({"message":"Usuario criado copm sucesso"}) ,201

@app.route("/logout", methods=["DELETE"])
def DeletarUsuario():
            return jsonify({"message":"Logout feito com sucesso"}),200
            

# @app.route("/add/<int:id>", methods=["POST"])
# def Add():
#     dados = request.json
    
#     nova = {
#         "id": len(tarefas) + 1,
#         "description":dados["description"],
#         "status": dados.get("status")
#     }
#     tarefas.append(nova)
#     return jsonify(tarefas)
if __name__ == "__main__":
    app.run(debug=True)