function assignProperties(args) {
    [key1,value1,key2,value2,key3,value3]=args
    console.log({
            [key1]: value1,
            [key2]: value2,
            [key3]: value3
        })
}
assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])