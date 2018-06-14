angular.module("meuModulo")
    .controller("indexController", function ($scope) {

        $scope.produtos = [
            { nome: "Conjunto para Mel", preco: 94.05, precoOriginal: 99.00, id: "p1" },
            { nome: "Tigela Bojuda Pequena", preco: 49.40, precoOriginal: "", id: "p2" },
            { nome: "Travessa Oval G", preco: 56.05, precoOriginal: "", id: "p3" },
            { nome: "Tigela Bojuda Mini", preco: 56.05, precoOriginal: 59.00, id: "p4" },
            { nome: "Conjunto para Mel", preco: 94.05, precoOriginal: 99.00, id: "p1" },
            { nome: "Tigela Bojuda Pequena", preco: 49.40, precoOriginal: "", id: "p2" },
            { nome: "Travessa Oval G", preco: 56.05, precoOriginal: "", id: "p3" },
            { nome: "Tigela Bojuda Mini", preco: 56.05, precoOriginal: 59.00, id: "p4" }
        ];

    })