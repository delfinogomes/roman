describe("roman", function(){
  
  it("deveria interpretar 1 como I",function(){
    expect(arabic2roman(1)).toBe("I")
  });

  it("deveria interpretar 2 como II",function(){
    expect(arabic2roman(2)).toBe("II")
  });
  
  it("deveria interpretar 3 como III",function(){
    expect(arabic2roman(3)).toBe("III")
  });
  
  it("deveria interpretar 4 como IV",function(){
    expect(arabic2roman(4)).toBe("IV")
  });
  
  it("deveria interpretar 5 como V",function(){
    expect(arabic2roman(5)).toBe("V")
  });
  
  it("deveria interpretar de 6 a 8 como VI, VII e VIII",function(){
    expect(arabic2roman(6)).toBe("VI")
    expect(arabic2roman(7)).toBe("VII")
    expect(arabic2roman(8)).toBe("VIII")
  });
  
  it("deveria interpretar 9 como IX",function(){  
    expect(arabic2roman(9)).toBe("IX")
  });

  it("deveria interpretar 10 como X",function(){  
    expect(arabic2roman(10)).toBe("X")
  });
  
  it("deveria interpretar 11 a 13",function(){  
    expect(arabic2roman(11)).toBe("XI")
    expect(arabic2roman(12)).toBe("XII")
    expect(arabic2roman(13)).toBe("XIII")
  });
  
  it("deveria interpretar 14 como XIV",function(){  
    expect(arabic2roman(14)).toBe("XIV")
  });
  
  it("deveria interpretar 15 a 18",function(){  
    expect(arabic2roman(15)).toBe("XV")
    expect(arabic2roman(16)).toBe("XVI")
    expect(arabic2roman(17)).toBe("XVII")
    expect(arabic2roman(18)).toBe("XVIII")
  });
  
  it("deveria interpretar 19 como XIX",function(){  
    expect(arabic2roman(19)).toBe("XIX")
  });  

  it("deveria interpretar 20 como XX",function(){  
    expect(arabic2roman(20)).toBe("XX")
  });  


});