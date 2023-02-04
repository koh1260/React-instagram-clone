const fn = require('./fn');

// toBo 같은 함수를 Mather라고 한다.
test('1은 1이다', () => {
    expect(1).toBe(1);
});

test('1은 1이다', () => {
    expect(1).toEqual(1);
});

//객체나 배열은 재귀적으로 순회하며 확인해야하기 때문에 toEqual
test("이름 나이", () => {
    expect(fn.makeUser("해성", 24)).toEqual({
        name: "해성",
        age: 24,
    });
});

test("이름 나이", () => {
    expect(fn.makeUser("해성", 24)).toStrictEqual({
        name: "해성",
        age: 24,
    });
});