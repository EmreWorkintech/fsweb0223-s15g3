const { carpma, toplama } = require('./index');

test('Sanity check', ()=> {
    expect(true).toBe(true);
})


test('Basic JS test', ()=> {
    expect(5+7).toBe(12);
    expect(5*7).toBe(35);
})

test('Object tests', ()=> {
    let o1  = {a:1};
    let o2  = {a:1};
    let o3  = {a:1, b:1};
    let o4 = o1; 
    expect(o1).not.toBe(o2); //true
    expect(o4).toBe(o1);
    expect(o1).toEqual(o2);
    expect(o3).not.toEqual(o1);
    expect(o3).toMatchObject(o1);
    expect(o3).toHaveProperty('a');
    expect(o1).toHaveProperty('a', 1);
})


test('String tests', ()=> {
    let s1 = "Emre Şahiner";
    let s2 = null;
    expect(s1).toHaveLength(12);
    expect(s1).toMatch(/mre/);
    expect(s2).toBeDefined();
})

describe('ARRAY', ()=> {
    let s1;
    //beforeAll(); 
    beforeEach(()=>{
        s1 = ["Emre", "Erdem", "Hakkı"];
    }); 
    //afterAll();
    //afterEach();

    describe('original array tests', ()=> {
        test('length returns 3', ()=> {
            expect(s1).toHaveLength(3);
        })
        
        test('first element is Emre', ()=> {
            expect(s1[0]).toBe("Emre");
        })
    })

    describe('modified array tests', ()=> {
        test('add new element to array', ()=> {
            s1.push("Gizem");
            expect(s1).toHaveLength(4);
            expect(s1[3]).toBe("Gizem");
        })
    })


    describe('modified array tests v2', ()=> {
        test('add new element to array', ()=> {
            s1.push("Hakkı");
            expect(s1[3]).toBe("Hakkı");
        })
    })
 
})

describe('Function tests', ()=> {
    test('carpma fucntions returns correct value', ()=> {
        expect(carpma(5,7)).toBe(35);
        expect(carpma(5,8)).toBe(40);
        expect(carpma(6,7)).toBe(42);
    })

    test('toplama is defined', async ()=> {
        let result = await toplama("a","b");
        expect(result).toBe("ab");
    })

    test('toplama is defined v2', async ()=> {
        toplama(5,7).then(result=>{
            expect(result).toBe(12);
        })
    })
    test.todo('buraya yapacağımız test gelecek')
    test('cems test', async ()=>{
        let a=5;
        let b=7;
        expect(await toplama(a,b)).toBe(a+b)
    })
})

