// Creamos la clases de nodos
class Node {
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}


// definimos el arbol
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // funcion de árbol para el valor
    insert(valor){
        const newNode = new Node(valor);

        if (this.root === null){
            this.root = newNode;
        }else {
            let currentNode = this.root;

            while(true){
                if(valor < currentNode.valor){
                    if(currentNode.izquierda === null){
                        currentNode.izquierda = newNode;
                        return true;
                    }
                    currentNode = currentNode.izquierda;
                }else{
                    if(currentNode.derecha === null){
                        currentNode.derecha = newNode;
                        return true;
                    }
                    currentNode = currentNode.derecha;
                }
            }
        }
    }

    buscar(valor) {
        let currentNode = this.root;
        let repeticiones = 0;

        while (currentNode !== null) {
            if (valor === currentNode.valor) {
                repeticiones++;
            }

            if (valor < currentNode.valor) {
                currentNode = currentNode.izquierda;
            } else {
                currentNode = currentNode.derecha;
            }
        }
        return { repeticiones };
    }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(4);
tree.insert(2);
tree.insert(4);
tree.insert(1);
tree.insert(4);

const resultado = tree.buscar(4);
console.log(`El valor, se encontró ${resultado.repeticiones} veces `);