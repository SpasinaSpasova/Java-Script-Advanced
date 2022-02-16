let { Repository } = require("./solution.js");
let { assert, expect } = require("chai");

describe("Tests", function () {

    let repo = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    it("1", function () {

        expect(() => new Repository(repo).props == repo);
    });
    it("2", function () {

        expect(() => new Repository(repo).data === new Map());
    });
    it("3", function () {

        expect(() => new Repository(repo).id === 0);
    });
    it("4", function () {

        expect(() => new Repository(repo).nextId === 1);
    });
    it("5", function () {

        expect(() => new Repository(repo).count === 0);
    });
    it("6", function () {

        expect(() => new Repository(repo).add(entity) == 1);
    });
    it("7", function () {

        expect(() => new Repository(repo).add(entity).nextId == 2);
    });
    it("8", function () {

        expect(() => new Repository(repo).add(entity).count == 1);
    });
    it("9", function () {

        expect(() => new Repository(repo).add(entity)).to.not.throw(`Property ${entity.name} is missing from the entity!`);
    });
    it("10", function () {

        expect(() => new Repository(repo).add(entity)).to.not.throw(`Property ${entity.name} is not of correct type!`);
    });
    it("11", function () {

        expect(() => new Repository(repo).getId(5)).to.throw(`Entity with id: 5 does not exist!`);
    });
    it("12", function () {

        expect(() => new Repository(repo).add(entity).getId(0)).to.not.throw(`Entity with id: 0 does not exist!`);
    });
    it("13", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        assert.equal(repotest.getId(0), entity);
    });


    //update valid entity
    it("14", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        let entity2 = {
            name: "Gosho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repotest.update(0, entity2);

        assert.equal(repotest.getId(0), entity2);
    });

    it("15", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        let entity2 = {
            name: "Gosho",
            age: '22',
            birthday: new Date(1998, 0, 7)
        };
        expect(() => repotest.update(0, entity2)).to.throw(`Property age is not of correct type!`);

    });
    it("16", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        let entity2 = {
            name: "Gosho",
            age: '22',
            birthday: new Date(1998, 0, 7)
        };
        expect(() => repotest.update(2, entity2)).to.throw(`Entity with id: 2 does not exist!`);

    });
    it("17", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        let entity2 = {
            name: "Gosho",
            age: '22',

        };
        expect(() => repotest.update(0, entity2)).to.throw(`Property birthday is missing from the entity!`);

    });
    it("18", function () {

        let entity2 = {
            name: "Gosho",
            age: '22',
        };
        expect(() => new Repository(repo).add(entity2)).to.throw(`Property birthday is missing from the entity!`);

    });
    it("19", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        expect(()=>repotest.del(2)).to.throw('Entity with id: 2 does not exist!');
    });
    it("20", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        expect(()=>repotest.del(1).count==0);
    });
    it("21", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        expect(()=>repotest.del(1).nextId==1);
    });
    it("22", function () {

        let repotest=new Repository(repo);
        repotest.add(entity)
        assert.equal(repotest.count,1);
    });
    it("23", function () {

        let repotest=new Repository(repo);
        repotest.add(entity)
        assert.equal(repotest.nextId(),1);
    });
    it("24", function () {

        let repotest=new Repository(repo);
        repotest.add(entity);
        repotest.del(0);
        assert.equal(repotest.nextId(),1);
    });
    it("25", function () {

        let repotest=new Repository(repo);
        repotest.add(entity);
        assert.equal(repotest.data.size,1);
    });
    it("26", function () {

        let repotest=new Repository(repo);
        repotest.add(entity);
        repotest.del(0);
        assert.equal(repotest.data.size,0);
    });
    it("27", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        let entity2 = {
            name: "Gosho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repotest.update(0, entity2);

        assert.equal(repotest.data.size,1);
    });
    it("28", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        let entity2 = {
            name: "Gosho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        repotest.add(entity2);
        repotest.update(0, entity2);
        assert.equal(repotest.getId(0),repotest.getId(1));

    });
    it('28', function () {
        let repotest= new Repository(repo);
        repotest.add(entity);         
        expect(repotest.add(entity)).to.equal(1);                        
    });   
    
    it("29", function () {

        let repotest = new Repository(repo);
        repotest.add(entity);
        expect(()=>repotest.del(-2)).to.throw('Entity with id: -2 does not exist!');
    });

});
