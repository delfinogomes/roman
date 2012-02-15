describe("arabic", function(){

  it("deveria resolver zero", function(){
	expect(roman2arabic("")).toBe(0)
})  

  it("deveria resolver letras sozinhas",function(){
    expect(roman2arabic("I")).toBe(1)
	expect(roman2arabic("V")).toBe(5)
	expect(roman2arabic("X")).toBe(10)
	expect(roman2arabic("L")).toBe(50)
	expect(roman2arabic("C")).toBe(100)
	expect(roman2arabic("D")).toBe(500)
	expect(roman2arabic("M")).toBe(1000)
  });

  it("deveria resolver letras repetidas",function(){
	expect(roman2arabic("II")).toBe(2)
	expect(roman2arabic("LXXXVIII")).toBe(88)
  });

  it("deveria resolver casos que contenham 4 e 9 no resultado",function(){
	expect(roman2arabic("IV")).toBe(4)
	expect(roman2arabic("CMXLIX")).toBe(949)
  });

});