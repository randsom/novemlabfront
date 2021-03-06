
angular.module('novemlab').service('JoueurService', function(apiUrl, $state, $http, $window) {

    var joueurServ = this;

    var service = {

        getJoueurs : function(){
            return joueurServ.joueurs;
        },

        getJoueur : function(){
            return joueurServ.joueurActuel;
        },

        // rend la liste des joueurs
        showAll : function(){
            return $http({
                method: 'GET',
                url: apiUrl + '/joueurs',
            }).then(function(res){
                joueurServ.joueurs = res.data;
            }).catch(function(){
                joueurServ.error = 'Could not find user';
            });
        },
        // rend un joueur par son id
        show : function(){
            $http({
                method: 'GET',
                url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
            }).then(function(res){
                joueurServ.joueur = res.data;
            }).catch(function(){
                joueurServ.error = 'Could not find user';
            });
        },

        create : function(data){
            return $http({
                method: 'POST',
                url: apiUrl + '/joueurs/',
                data: data
            })
        },

        createScore : function(data){
            //Create score when user is created
           return $http({
                method: 'POST',
                url: apiUrl + '/scores/',
                data: {
                    "joueur_id":data,
                    "management":2,
                    "communication":2,
                    "business":2,
                    "gestion":2,
                    "conception":2,
                    "technique":2
                }
            })
        },

        delete : function(){
            $http({
                method: 'DELETE',
                url: apiUrl + '/joueurs/'+ $stateParams.joueurId,
            }).then(function(res){
                console.log("Delete done !")
            }).catch(function(){
                joueurServ.error = 'Could not delete user';
            });
        },

        modify : function(data) {
            var idJoueur = JSON.parse($window.sessionStorage.getItem("joueurId"));
            return $http({
              method: 'PATCH',
              url: apiUrl+'/joueurs/'+ idJoueur,
              data: data,
            })
        },

        updateScorePhase1 : function(data){
            var idScore = JSON.parse($window.sessionStorage.getItem("score"))._id;
            return $http({
              method: 'PATCH',
              url: apiUrl+'/scores/phase1/'+ idScore,
              data: data
            })
        },

        updateScorePhase2 : function(data) {
            var idScore = JSON.parse($window.sessionStorage.getItem("score"))._id;
            return $http({
                method: 'PATCH',
                url: apiUrl + '/scores/phase2/' + idScore,
                data: data
            }).then(function (res) {
                $window.sessionStorage.setItem("score", JSON.stringify(res.data));
                console.log("Score updated !");
            }).catch(function () {
                joueurServ.error = 'Could not edit score';
            });
        }
    };

    return service;

});