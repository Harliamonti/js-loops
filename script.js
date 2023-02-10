const testArray = ["testy", "Liam", "javaSCRIPT"];

for (const it of testArray)
{
    console.log(it);
}

console.log("\n")

for (let i = 0; i < testArray.length; i++)
{
    console.log(testArray[i]);
}

const foo = testArray.map(string => string.toUpperCase());

for (const it of foo)
{
    console.log(it);
}