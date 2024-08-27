function List(props) {


    // fruits.sort((a,b) => a.name.localeCompare(b.name)) ; // alphabetical order

    // const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name} &nbsp; calories {fruit.calories}</li>)
    let itemList = props.items

    const lowCalories = itemList.filter(fruit => fruit.calories > 50).map(filterFruit => <li key={filterFruit.id}>the name is {lowCalories.name} and <b>{filterFruit.calories}</b></li>)

    // const listItem = itemList.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <ol className="list-catagoty">{lowCalories}</ol>
    );

}

export default List