for (let i = 1; i <= 10; i += 1) {
    const numberType = i % 2 === 0 ? 'парне' : 'непарне';
    console.log(`Число ${i} - ${numberType}`);
}